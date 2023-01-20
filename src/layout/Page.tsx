import { styled } from "theme";

import type { PropsWithChildren } from "react";

import { GITHUB_LINK, LINKED_IN_LINK, TWITTER_LINK } from "@/commons/config";
import {
    DashboardIcon,
    GitHubIcon,
    LinkedInIcon,
    MeIcon,
    ProjectsIcon,
    SkillsIcon,
    TwitterIcon,
} from "@/commons/icons";
import type { NavRoute } from "@/components/nav";
import Nav from "@/components/nav";

import SEO from "layout/SEO";

type PageProps = PropsWithChildren<{
    name: string;
    description: string;
}>;

export default function Page({ name, description, children }: PageProps) {
    return (
        <>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <SEO name={name} description={description} />
            <PageContainer>
                <Nav routes={ROUTES} socials={SOCIALS} />
                <Main>{children}</Main>
            </PageContainer>
        </>
    );
}

const ROUTES: NavRoute[] = [
    {
        name: "Me",
        href: "/",
        icon: MeIcon,
    },
    {
        name: "Projects",
        href: "/projects",
        icon: ProjectsIcon,
    },
    {
        name: "Skills",
        href: "/skills",
        icon: SkillsIcon,
    },
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: DashboardIcon,
    },
];

const SOCIALS: NavRoute[] = [
    {
        name: "Twitter",
        href: TWITTER_LINK,
        icon: TwitterIcon,
    },
    {
        name: "GitHub",
        href: GITHUB_LINK,
        icon: GitHubIcon,
    },
    {
        name: "LinkedIn",
        href: LINKED_IN_LINK,
        icon: LinkedInIcon,
    },
];

const PageContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    minHeight: "100vh",
    minWidth: "100vw",
});

const Main = styled("main", {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    paddingY: "$main-y-padding",
    paddingX: "$main-x-padding",
});
