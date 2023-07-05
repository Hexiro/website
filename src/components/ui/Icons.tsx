/*
 * tabler:          https://tabler-icons.io
 * iconic:          https://iconic.app
 * feather:         https://feathericons.com
 * simple icons:    https://simpleicons.org
 */
import type { PropsWithChildren } from "react";

import { twMerge } from "tailwind-merge";

export type IconType = (props?: IconProps) => JSX.Element;
export type IconProps = PropsWithChildren<{
    className?: string;
}>;

const Icon = ({ children, className }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={twMerge("h-6 w-6 fill-none stroke-current stroke-2 text-green", className)}
    >
        {children}
    </svg>
);

const SimpleIcon = ({ children, className }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        className={twMerge("h-6 w-6 fill-green stroke-none text-green", className)}
    >
        {children}
    </svg>
);

// UI Icons

export const ArrowUpIcon: IconType = (props) => (
    <Icon {...props}>
        <path d="M12 5l0 14" />
        <path d="M16 9l-4 -4" />
        <path d="M8 9l4 -4" />
    </Icon>
);

export const ArrowDownIcon: IconType = (props) => (
    <Icon {...props}>
        <path d="M12 5l0 14" />
        <path d="M16 15l-4 4" />
        <path d="M8 15l4 4" />
    </Icon>
);

export const ArrowRightIcon: IconType = (props) => (
    // 'arrow-narrow-right' from tabler
    <Icon {...props}>
        <path d="M5 12l14 0" />
        <path d="M15 16l4 -4" />
        <path d="M15 8l4 4" />
    </Icon>
);

export const StarsIcon: IconType = (props) => (
    // 'sparkles-2' from iconic
    <Icon {...props}>
        <path d="M17 4.75C17 5.89705 15.8971 7 14.75 7C15.8971 7 17 8.10295 17 9.25C17 8.10295 18.1029 7 19.25 7C18.1029 7 17 5.89705 17 4.75Z" />
        <path d="M17 14.75C17 15.8971 15.8971 17 14.75 17C15.8971 17 17 18.1029 17 19.25C17 18.1029 18.1029 17 19.25 17C18.1029 17 17 15.8971 17 14.75Z" />
        <path d="M9 7.75C9 9.91666 6.91666 12 4.75 12C6.91666 12 9 14.0833 9 16.25C9 14.0833 11.0833 12 13.25 12C11.0833 12 9 9.91666 9 7.75Z" />
    </Icon>
);

export const ExternalLinkIcon: IconType = (props) => (
    // 'share' from iconic
    <Icon {...props}>
        <path d="M9.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V14.75" />
        <path d="M19.25 9.25V4.75H14.75" />
        <path d="M19 5L11.75 12.25" />
    </Icon>
);

export const PackageIcon: IconType = (props) => (
    // 'package' from tabler (flipped horizontally)
    <Icon {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M4 7.5L12 3L20 7.5M4 7.5V16.5L12 21M4 7.5L12 12M12 21L20 16.5V7.5M12 21V12M20 7.5L12 12M8 5.25L16 9.75" />
    </Icon>
);

export const CopyIcon: IconType = (props) => (
    // 'clipboard' from iconic
    <Icon {...props}>
        <path d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15" />
        <path d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z" />
        <path d="M9.75 12.25H14.25" />
        <path d="M9.75 15.25H14.25" />
    </Icon>
);

export const CheckIcon: IconType = (props) => (
    // 'check' from iconic
    <Icon {...props}>
        <path d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75" />
    </Icon>
);

export const XIcon: IconType = (props) => (
    // 'x' from tabler
    <Icon {...props}>
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </Icon>
);

// sections icons

export const AboutIcon: IconType = (props) => (
    // 'user' from iconic
    <Icon {...props}>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z" />
    </Icon>
);

export const ProjectsIcon: IconType = (props) => (
    // 'stack-2' from tabler-icons
    <Icon {...props}>
        <path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
        <path d="M4 12l8 4l8 -4" />
        <path d="M4 16l8 4l8 -4" />
    </Icon>
);

export const SkillsIcon: IconType = (props) => (
    // 'chart-bar' from tabler-icons
    <Icon {...props}>
        <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M4 20l14 0" />
    </Icon>
);

export const ContactIcon: IconType = (props) => (
    // 'link' from iconic
    <Icon {...props}>
        <path d="M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65685 18 6V6C16.3431 4.34315 13.6569 4.34315 12 6L10.75 7.25" />
        <path d="M7.25 10.75L6 12C4.34315 13.6569 4.34315 16.3431 6 18V18C7.65685 19.6569 10.3431 19.6569 12 18L13.25 16.75" />
        <path d="M14.25 9.75L9.75 14.25" />
    </Icon>
);

// languages icons

export const PythonIcon: IconType = (props) => (
    // 'brand-python' from tabler
    <Icon {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
        <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
        <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
        <path d="M11 6l0 .01" />
        <path d="M13 18l0 .01" />
    </Icon>
);

export const TypeScriptIcon: IconType = (props) => (
    // custom TypeScript icon
    <Icon {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M18.4286 12.6429V12.4286C18.4286 11.4818 17.661 10.7143 16.7143 10.7143H15.2143C14.1492 10.7143 13.2857 11.5777 13.2857 12.6429C13.2857 13.708 14.1492 14.5714 15.2143 14.5714H16.5C17.5651 14.5714 18.4286 15.4349 18.4286 16.5C18.4286 17.5651 17.5651 18.4286 16.5 18.4286H15.2143C14.1492 18.4286 13.2857 17.5651 13.2857 16.5M12.6429 10.7143H6.21429M9.42857 10.7143V19.0714M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" />
    </Icon>
);

export const JavaScriptIcon: IconType = (props) => (
    // custom JavaScript icon
    <Icon {...props}>
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M18.4286 12.6429V12.4286C18.4286 11.4818 17.661 10.7143 16.7143 10.7143H15.2143C14.1492 10.7143 13.2857 11.5777 13.2857 12.6429C13.2857 13.708 14.1492 14.5714 15.2143 14.5714H16.5C17.5651 14.5714 18.4286 15.4349 18.4286 16.5C18.4286 17.5651 17.5651 18.4286 16.5 18.4286H15.2143C14.1492 18.4286 13.2857 17.5651 13.2857 16.5M10.7143 10.0714V16.5C10.7143 17.5651 9.85084 18.4286 8.78571 18.4286C7.72059 18.4286 6.85714 17.5651 6.85714 16.5M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" />
    </Icon>
);

export const GoIcon: IconType = (props) => (
    // 'brand-golang' from tabler
    <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15.695 14.305c1.061 1.06 2.953 .888 4.226 -.384c1.272 -1.273 1.444 -3.165 .384 -4.226c-1.061 -1.06 -2.953 -.888 -4.226 .384c-1.272 1.273 -1.444 3.165 -.384 4.226z" />
        <path d="M12.68 9.233c-1.084 -.497 -2.545 -.191 -3.591 .846c-1.284 1.273 -1.457 3.165 -.388 4.226c1.07 1.06 2.978 .888 4.261 -.384a3.669 3.669 0 0 0 1.038 -1.921h-2.427" />
        <path d="M5.5 15h-1.5" />
        <path d="M6 9h-2" />
        <path d="M5 12h-3" />
    </Icon>
);

export const RustIcon: IconType = (props) => (
    // 'rust' from simple icons
    <SimpleIcon {...props}>
        <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" />
    </SimpleIcon>
);

export const HTMLIcon: IconType = (props) => (
    // 'brand-html5' icon from tabler
    <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </Icon>
);

export const CSSIcon: IconType = (props) => (
    // 'brand-css3' icon from tabler
    <Icon {...props}>
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
        <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </Icon>
);

export const ReactIcon: IconType = (props) => (
    // 'brand-react' icon from tabler
    <Icon {...props}>
        <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
        <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
        <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
        <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
        <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
        <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
        <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
    </Icon>
);

// socials icons

export const EmailIcon: IconType = (props) => (
    // 'mail' icon from tabler
    <Icon {...props}>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
    </Icon>
);

export const GitHubIcon: IconType = (props) => (
    // 'brand-github' icon from tabler
    <Icon {...props}>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </Icon>
);

export const LinkedInIcon: IconType = (props) => (
    // 'brand-linkedin' icon from tabler
    <Icon {...props}>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </Icon>
);

export const DiscordIcon: IconType = (props) => (
    // 'discord' icon from tabler
    <Icon {...props}>
        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
    </Icon>
);

export const TwitterIcon: IconType = (props) => (
    // 'twitter' icon from iconic
    <Icon {...props}>
        <path d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z" />
    </Icon>
);
