import Image from "next/image";

import { DISCORD_SNOWFLAKE } from "@/commons/config";

import Card from "@/components/ui/Card";

import { twMerge } from "tailwind-merge";
import { useLanyardWS } from "use-lanyard";
import type { Activity as LanyardActivity, Data as LanyardData, DiscordUser } from "use-lanyard";

export default function DiscordCard({ className }: { className?: string }) {
    const initialData = {
        "spotify": null,
        "listening_to_spotify": false,
        "kv": {},
        "discord_user": {
            "username": "nathlod",
            "public_flags": 4194432,
            "id": DISCORD_SNOWFLAKE,
            "global_name": "nathan",
            "display_name": "nathan",
            "discriminator": "0",
            "bot": false,
            "avatar_decoration": null,
            "avatar": "30a5d8423b9471d72a374883a80089b9",
        },
        "discord_status": "offline",
        "activities": [],
        "active_on_discord_web": false,
        "active_on_discord_mobile": false,
        "active_on_discord_desktop": true,
    } satisfies LanyardData;

    let presence = useLanyardWS(DISCORD_SNOWFLAKE, { initialData });
    if (!presence) presence = initialData;

    const state = parsePresence(presence);
    const isOnline = presence.discord_status !== "offline";

    return (
        <Card
            className={twMerge(
                "transition-transform duration-slow ease-in-out hover:perspective-800px hover:rotate-[-1deg] hover:scale-105",
                "max-w-md, w-1/2",
                className
            )}
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-row">
                    <div className="relative mr-4">
                        <Image
                            className="rounded-full"
                            width={64}
                            height={64}
                            src={state.user.avatar}
                            alt={state.user.alt}
                        />
                        <span className="absolute bottom-[-3px] right-[-6px] w-7 h-7 rounded-full bg-[#B6B6B6] border-[5px] border-background-secondary" />
                    </div>
                    <div className="flex flex-col mt-1 leading-extra-tight">
                        <h4 className="text-green text-[28px]">{state.user.displayName}</h4>
                        <h5 className="text-subtitle font-sans font-bold text-[16px]">
                            @{state.user.username}
                        </h5>
                    </div>
                </div>
            </div>
        </Card>
    );
}

interface DiscordPresenceState {
    user: DiscordUserState;
    ide: DiscordPresenceIDEState | null;
}

type DiscordUserStatus = LanyardData["discord_status"];

interface DiscordUserState {
    displayName: string;
    username: string;
    avatar: string;
    alt: string;
    status: DiscordUserStatus;
}

interface DiscordPresenceIDEState {
    name: string;
    lines: DiscordPresenceLine[];
    images: {
        large: DiscordPresenceImage;
        small: DiscordPresenceImage;
    };
}

interface DiscordPresenceImage {
    src: string;
    alt: string;
}

type DiscordPresenceLine = DiscordPresenceLineChunk[];

interface DiscordPresenceLineChunk {
    text: string;
    highlighted: boolean;
}

const parsePresence = (data: LanyardData): DiscordPresenceState => {
    const userState = parseDiscordUser(data.discord_user, data.discord_status);
    let ideState: DiscordPresenceIDEState | null = null;

    for (const activity of data.activities) {
        ideState = parseActivity(activity);
        if (ideState) break;
    }

    return {
        user: userState,
        ide: ideState,
    };
};

function parseDiscordUser(user: DiscordUser, status: DiscordUserStatus): DiscordUserState {
    const avatar = parseAvatar(user, 80);
    return {
        displayName: user.global_name ?? user.username,
        username: user.username,
        status,
        avatar: avatar.src,
        alt: avatar.alt,
    };
}

function parseAvatar(discordUser: DiscordUser, size: number): DiscordPresenceImage {
    size = Math.round(size);
    let src: string;
    let alt: string;

    if (discordUser.avatar) {
        src = `https://cdn.discordapp.com/avatars/${DISCORD_SNOWFLAKE}/${discordUser.avatar}.webp?size=${size}`;
        alt = `${discordUser.username}'s Discord Avatar`;
    } else {
        let avatarNum: number;
        if (discordUser.discriminator !== "0") {
            avatarNum = Number(discordUser.discriminator) % 5;
        } else {
            avatarNum = 1;
        }

        src = `https://cdn.discordapp.com/embed/avatars/${avatarNum}.png?size=${size}`;
        alt = `Default Discord Avatar #${avatarNum}`;
    }

    return { src, alt };
}

function parseActivity(activity: LanyardActivity): DiscordPresenceIDEState | null {
    if (activity.type !== 0) return null;

    const { assets, application_id } = activity;
    if (!assets || !application_id) return null;
    if (!assets.large_image || !assets.small_image) return null;
    if (!activity.details) return null;

    const large = parseImage(application_id, assets.large_image, assets.large_text, "large");
    const small = parseImage(application_id, assets.small_image, assets.small_text, "small");

    const lines: DiscordPresenceLine[] = [parseLine(activity.details)];
    if (activity.state) lines.push(parseLine(activity.state));

    return {
        name: activity.name,
        images: { large, small },
        lines,
    };
}

function parseLine(text: string): DiscordPresenceLine {
    const highlightSplit = text.split("`");
    const chunks: DiscordPresenceLineChunk[] = [];

    for (const [i, chunk] of highlightSplit.entries()) {
        const highlighted = i % 2 === 1;
        chunks.push({ text: chunk, highlighted });
    }

    return chunks;
}

function parseImage(
    applicationId: string,
    assetId: string,
    text: string | undefined,
    type: "large" | "small"
): DiscordPresenceImage {
    let alt = text;

    if (!alt) {
        alt = `${type.charAt(0).toUpperCase()}${type.substring(1)} Rich Presence image`;
    }

    return {
        src: buildAsset(applicationId, assetId),
        alt,
    };
}

function buildAsset(applicationId: string, assetId: string): string {
    // { application_asset_id } or media proxy urls
    // docs: https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-asset-image

    if (assetId.startsWith("mp:external")) {
        // https://media.discordapp.net/external/ledVVfR9-gwyjYvoVaqZjX0LJmFiM51gyQ3hlIhUyK0/https/raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/tsx.png
        // mp:external/ledVVfR9-gwyjYvoVaqZjX0LJmFiM51gyQ3hlIhUyK0/https/raw.githubusercontent.com/LeonardSSH/vscord/main/assets/icons/tsx.png
        return assetId.replace("mp:external/", "https://media.discordapp.net/external/");
    }

    return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetId}.png`;
}
