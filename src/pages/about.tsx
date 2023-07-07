import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";

import { SOCIALS, SOCIALS_MAP } from "@/commons/config";

import { Card } from "@/components/ui/Cards";
import { H1, H3, H4 } from "@/components/ui/Headings";

import { SocialCard } from "@/components/cards/SocialCard";

import introSrc from "@/images/intro.png";

import { twMerge } from "tailwind-merge";

const INTRO =
    "Hey, I'm Nathan Lodge :p. I'm an 18-year-old software engineer based in the United States. Thank you for checking out my website :), I've been a passionate programmer since I was in middle school (age 13, for those unfamiliar). Instead of repeating myself, I'll tell you about my life away from the IDE since the rest of the website can demonstrate my programming skills.";

const MAIN_HOBBIES =
    "While programming is my primary hobby, of course, I do other human things like hanging out with my friends, watching movies, and listening to music. I prefer watching movies over watching TV shows and my favorite genres are psychological thrillers, drama, and crime. I also, naturally, love listening to music. My favorite genres are rap and r&b, and if you're aware of the subgenres, I like plugg, pluggnb, cloud rap, and trap.";

const VIDEO_GAMES =
    "My last primary hobby is playing video games :o (original I know). The only real video games I play are Counter-Strike: Global Offensive (soon to be CS2), Minecraft, and occasionally Fortnite. CS:GO is the game I reach for when I’m feeling competitive. I’m Master Guardian 2 as of writing this, so I’m pretty solid, I’d say. Minecraft is the game I play when I’m just trying to chill alone, and Fortnite is always a fun game to play with a group of friends. I’m also a fan of single-player story-style games, although I haven't explored the genre too much. I did enjoy playing through the few COD campaigns I have along with GTA 5, GTA 4, GTA San Andreas, and Saints Row 2.";

export default function AboutPage() {
    return (
        <>
            <div className="mb-12">
                <H1>About</H1>
                <H3 className="text-subtitle">My life beyond the IDE.</H3>
            </div>
            <div className="flex max-w-6xl flex-col gap-y-24">
                <AboutSection text={INTRO}>
                    <ImageCard
                        caption="Me"
                        alt="repping my 2023 hacktoberfest shirt."
                        src={introSrc}
                    />
                </AboutSection>
                <AboutSection text={MAIN_HOBBIES} childrenClassName="flex flex-col gap-y-4">
                    <SocialCard social={SOCIALS_MAP.IMDb} />
                    <SocialCard social={SOCIALS_MAP.Spotify} />
                </AboutSection>
                <AboutSection text={VIDEO_GAMES} childrenClassName="flex flex-col gap-y-4">
                    <SocialCard social={SOCIALS_MAP.Steam} />
                    <SocialCard social={SOCIALS_MAP["Epic Games"]} />
                </AboutSection>
            </div>
        </>
    );
}

interface IAboutSectionProps extends PropsWithChildren {
    text: string;
    className?: string;
    childrenClassName?: string;
}

const AboutSection = ({ text, className, children, childrenClassName }: IAboutSectionProps) => (
    <div
        className={twMerge("flex flex-row items-center gap-x-20 even:flex-row-reverse", className)}
    >
        <p className="text-[18px]">{text}</p>
        <div className={twMerge( childrenClassName)}>{children}</div>
    </div>
);

interface IImageCardProps extends ComponentProps<typeof Image> {
    caption: string;
    className?: string;
}

const ImageCard = ({ className, caption, alt, ...props }: IImageCardProps) => (
    <Card
        className={twMerge(
            "grow-1 ml-auto flex flex-row items-center justify-center self-start px-6 py-5",
            className
        )}
    >
        <div className="mr-4 self-start">
            <H4 green className="text-base md:text-[28px]">
                {caption}
            </H4>
            <p>{alt}</p>
        </div>
        <Image
            alt={`${caption}, ${alt}`}
            className="max-h-xs max-w-xs rounded-md border-2 border-solid border-white/10 drop-shadow-md"
            {...props}
        />
    </Card>
);
