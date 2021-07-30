import { Activity, LanyardData } from "react-use-lanyard";
import { KeyValue, SongBar, Tooltip } from "./";
import { useEffect, useState } from "react";

import { Discord } from "../data/config";

const buildAsset = (applicationId: string, assetId: string): string => {
    return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetId}.png`;
};

export const Lanyard = () => {
    const [status, setStatus] = useState<LanyardData>();
    const [websocket, setWebsocket] = useState<WebSocket>();
    const [loading, setLoading] = useState(true);

    const SOCKET_URL = "wss://api.lanyard.rest/socket";

    useEffect(() => {
        let socket: WebSocket;
        let heartbeat: NodeJS.Timeout;

        const supportsWebSocket = "WebSocket" in window || "MozWebSocket" in window;
        if (!supportsWebSocket) throw new Error("Browser doesn't support WebSocket connections.");

        const connectWebsocket = () => {
            socket = new WebSocket(SOCKET_URL);
            setWebsocket(socket);

            socket.addEventListener("open", () => {
                socket.send(
                    JSON.stringify({
                        op: 2,
                        d: {
                            subscribe_to_id: Discord,
                        },
                    })
                );

                heartbeat = setInterval(() => {
                    socket.send(
                        JSON.stringify({
                            op: 3,
                        })
                    );
                }, 30000);
            });

            socket.addEventListener("message", ({ data }) => {
                const { t, d } = JSON.parse(data);

                if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
                    setStatus((d || {}) as LanyardData);
                    if (loading) setLoading(false);
                }
            });

            socket.addEventListener("close", () => {
                console.log("WEBSOCKET CLOSED -- RECONNECTING");
                setTimeout(() => {
                    connectWebsocket();
                }, 1000);
            });
        };

        connectWebsocket();

        return () => {
            clearInterval(heartbeat);
            socket.close();
        };
    }, []);

    let activity: Activity | undefined;
    for (const act of status?.activities || []) {
        if (act && (act.type === 2 || act.type === 0) && act.assets && act.timestamps) {
            activity = act;
            break;
        }
    }

    let timestamps = activity?.timestamps;
    let stamp = SongBar({ start: timestamps?.start, end: timestamps?.end });

    // if no data / invalid data is returned / i have no availble
    if (loading || !status || !activity) return null;

    const isListening = activity.type === 2 && typeof status.spotify !== "undefined";
    const isGame = activity.type === 0 && typeof activity.application_id !== "undefined";

    // is checked if for loop -- not recognized by ts
    const assets = activity.assets!;

    // assets
    let largeImage: string;
    let smallImage: string | undefined;

    // text
    let name: string;
    let firstLine: string | undefined;
    let secondLine: string | undefined;

    if (isListening) {
        const spotify = status.spotify!;
        largeImage = spotify.album_art_url;
        name = spotify.song;
        firstLine = "By: " + spotify.artist.replaceAll(";", ",");
        secondLine = "On: " + spotify.album.replaceAll(";", ",");
    } else if (isGame) {
        const application_id = activity.application_id!;
        largeImage = buildAsset(application_id, assets.large_image);
        if (assets.small_image) {
            smallImage = buildAsset(application_id, assets.small_image);
        }
        name = activity.name;
        firstLine = activity.details;
        // fix for VSC
        if (firstLine?.startsWith("Editing")) {
            firstLine = firstLine.replace("Editing", "Editing:");
        }
        secondLine = activity.state;
    } else {
        return null;
    }

    return (
        <div className="lanyard">
            <div className="lanyard-images">
                <div className="large-image">
                    <Tooltip title={assets?.large_text}>
                        <img
                            alt="large image of application or song"
                            draggable={false}
                            src={largeImage}
                        />
                    </Tooltip>
                </div>
                <div className="small-image">
                    {smallImage && (
                        <Tooltip title={assets?.small_text} size="small">
                            <img
                                alt="small image of application"
                                draggable={false}
                                src={smallImage}
                            />
                        </Tooltip>
                    )}
                </div>
            </div>
            <div className="lanyard-text">
                <h4 className="main-accent">{name}</h4>
                <KeyValue line={firstLine} />
                <KeyValue line={secondLine} />
            </div>
            {isListening && <div className="lanyard-song-bar">{stamp}</div>}
        </div>
    );
};
