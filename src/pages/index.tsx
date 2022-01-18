import type { GetStaticProps } from "next";
import { useRef } from "react";

import type { RepositoryProps } from "commons/graphql";
import githubGraphQL, { PROJECTS, CONTRIBUTIONS } from "commons/graphql";
import { Page } from "components/pages";
import Sections, { Contributions, Me, Projects } from "sections";
import Nav from "sections/nav";

interface HomeProps {
    projects: RepositoryProps[];
    contributions: RepositoryProps[];
}

export default function Home({ projects, contributions }: HomeProps) {
    const meRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);
    const contributionsRef = useRef<HTMLElement | null>(null);

    return (
        <Page name="Home" description="desc">
            <Nav meRef={meRef} projectsRef={projectsRef} contributionsRef={contributionsRef} />
            <Sections>
                <Me ref={meRef} />
                <Projects ref={projectsRef} projects={projects} />
                <Contributions ref={contributionsRef} contributions={contributions} />
            </Sections>
        </Page>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const projectsResp = await githubGraphQL(PROJECTS);
    const projectsJson = await projectsResp.json();
    const projects: RepositoryProps[] = projectsJson.data.viewer.pinnedItems.nodes;
    const contributionsResp = await githubGraphQL(CONTRIBUTIONS);
    const contributionsJson = await contributionsResp.json();
    const contributions: RepositoryProps[] =
        contributionsJson.data.viewer.repositoriesContributedTo.nodes;

    return {
        props: {
            projects,
            contributions,
        },
        revalidate: 3600,
    };
};
