import { styled } from "@/theme";
import type { ComponentProps } from "@stitches/react";

const Icon = styled("svg", {
    color: "$brand-primary",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",

    defaultVariants: {
        size: "md",
        fill: false,
        stroke: true,
    },

    variants: {
        fill: {
            true: {
                fill: "currentColor",
            },
            false: {
                fill: "none",
            },
        },
        stroke: {
            true: {
                stroke: "currentColor",
            },
            false: {
                stroke: "none",
            },
        },
        size: {
            "auto-height": {
                width: "auto",
                height: "100%",
            },
            "auto-width": {
                width: "100%",
                height: "auto",
            },
            sm: {
                width: 16,
                height: 16,
                "@md": {
                    width: 20,
                    height: 20,
                },
            },
            md: {
                width: 24,
                height: 24,
                "@lg": {
                    width: 28,
                    height: 28,
                },
            },
            lg: {
                width: 28,
                height: 28,
                "@md": {
                    width: 32,
                    height: 32,
                },
            },
            xl: {
                width: 36,
                height: 36,
                "@md": {
                    width: 40,
                    height: 40,
                },
            },
            xxl: {
                width: 44,
                height: 44,
                "@md": {
                    width: 48,
                    height: 48,
                },
            },
        },
    },
});

export type IconType = (props?: IconProps) => JSX.Element;
export type IconProps = ComponentProps<typeof Icon>;

export const TwitterIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
    </Icon>
);

export const GitHubIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </Icon>
);

export const LinkedInIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="11" x2="8" y2="16" />
        <line x1="8" y1="8" x2="8" y2="8.01" />
        <line x1="12" y1="16" x2="12" y2="11" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </Icon>
);

export const HomeIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </Icon>
);

export const ProjectsIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <polyline points="7 8 3 12 7 16" />
        <polyline points="17 8 21 12 17 16" />
        <line x1="14" y1="4" x2="10" y2="20" />
    </Icon>
);

export const SkillsIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <circle cx="12" cy="9" r="6" />
        <path d="M12.002 15.003l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
        <path d="M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
    </Icon>
);

export const DashboardIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M7 20h10" />
        <path d="M9 16v4" />
        <path d="M15 16v4" />
        <path d="M9 12v-4" />
        <path d="M12 12v-1" />
        <path d="M15 12v-2" />
        <path d="M12 12v-1" />
    </Icon>
);

export const ToolsIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
        <path d="M14.5 5.5l4 4" />
        <path d="M12 8l-5 -5l-4 4l5 5" />
        <path d="M7 8l-1.5 1.5" />
        <path d="M16 12l5 5l-4 4l-5 -5" />
        <path d="M16 17l-1.5 1.5" />
    </Icon>
);

export const HamburgerMenuIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
    </Icon>
);

export const CloseIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </Icon>
);

export const ExternalLinkIcon: IconType = (props) => (
    // 'share' from iconic
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M9.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V14.75" />
        <path d="M19.25 9.25V4.75H14.75" />
        <path d="M19 5L11.75 12.25" />
    </Icon>
);

export const PackageIcon: IconType = (props) => (
    // 'package' from tabler (flipped horizontally)
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M4 7.5L12 3L20 7.5M4 7.5V16.5L12 21M4 7.5L12 12M12 21L20 16.5V7.5M12 21V12M20 7.5L12 12M8 5.25L16 9.75" />
    </Icon>
);

export const StarIcon: IconType = (props) => (
    // 'star' from tabler
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </Icon>
);

// raw programming language icons

export const PythonIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
        <path d="M11 6l0 .01" />
        <path d="M13 18l0 .01" />
    </Icon>
);

export const TypeScriptIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M18.4286 12.6429V12.4286C18.4286 11.4818 17.661 10.7143 16.7143 10.7143H15.2143C14.1492 10.7143 13.2857 11.5777 13.2857 12.6429C13.2857 13.708 14.1492 14.5714 15.2143 14.5714H16.5C17.5651 14.5714 18.4286 15.4349 18.4286 16.5C18.4286 17.5651 17.5651 18.4286 16.5 18.4286H15.2143C14.1492 18.4286 13.2857 17.5651 13.2857 16.5M12.6429 10.7143H6.21429M9.42857 10.7143V19.0714M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" />
    </Icon>
);

export const JavaScriptIcon: IconType = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M18.4286 12.6429V12.4286C18.4286 11.4818 17.661 10.7143 16.7143 10.7143H15.2143C14.1492 10.7143 13.2857 11.5777 13.2857 12.6429C13.2857 13.708 14.1492 14.5714 15.2143 14.5714H16.5C17.5651 14.5714 18.4286 15.4349 18.4286 16.5C18.4286 17.5651 17.5651 18.4286 16.5 18.4286H15.2143C14.1492 18.4286 13.2857 17.5651 13.2857 16.5M10.7143 10.0714V16.5C10.7143 17.5651 9.85084 18.4286 8.78571 18.4286C7.72059 18.4286 6.85714 17.5651 6.85714 16.5M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" />
    </Icon>
);

export const GoIcon: IconType = (props) => (
    <Icon fill stroke={false} viewBox="0 0 24 24" {...props}>
        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" />
    </Icon>
);

export const RustIcon: IconType = (props) => (
    <Icon fill stroke={false} viewBox="0 0 24 24" {...props}>
        <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" />
    </Icon>
);
