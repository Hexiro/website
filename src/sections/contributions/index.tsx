import { forwardRef } from "react";

import { fade, fadeChildren } from "commons/animations";
import type { PullRequestProps } from "commons/graphql";
import theme from "commons/theme";
import { Header } from "components/common";
import Repository from "components/repository";
import { useScrollAnimation } from "hooks/useScrollAnimation";
import type { SectionProps } from "sections";

import { motion } from "framer-motion";
import styled from "styled-components";

interface ContributionsProps extends SectionProps {
    pullRequests: PullRequestProps[];
}

export const Contributions = forwardRef<HTMLElement, ContributionsProps>(
    ({ pullRequests, inView }, ref) => {
        const animate = useScrollAnimation(inView);
        return (
            <ContributionsSection
                ref={ref}
                id="contributions"
                animate={animate}
                initial="start"
                variants={fadeChildren}
            >
                <Text variants={fade}>
                    <h1>
                        <Header>Contributions</Header>
                    </h1>
                    <Description>
                        These pull requests are my top 6 GitHub pull requests. They&apos;re sorted
                        by additions and deletions to showcase where my changes had a meaningful
                        impact on the project.
                    </Description>
                </Text>
                <ContributionsContainer variants={fadeChildren}>
                    {pullRequests.map(pullRequest => (
                        <Repository
                            key={pullRequest.baseRepository.name}
                            details={pullRequest.baseRepository}
                        >
                            <Additions>{`+${pullRequest.additions}`}</Additions>
                            <Deletions>{`-${pullRequest.deletions}`}</Deletions>
                        </Repository>
                    ))}
                </ContributionsContainer>
            </ContributionsSection>
        );
    }
);

// temporaily borrowing styles from projects page

const Additions = styled.span`
    display: inline;
    color: ${theme.core.main};
    margin: 0 3px;
`;

const Deletions = styled(Additions)`
    color: #ff5858;
    margin-right: 10px;
`;

const Text = styled(motion.div)`
    text-align: right;
    margin-right: 1%;
    margin-left: 15%;
`;

const Description = styled.p`
    float: right;
`;

const ContributionsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;

const ContributionsSection = styled(motion.section)`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 900px) {
        justify-content: center;

        ${Text} {
            text-align: center;
        }
        ${Description} {
            max-width: unset;
            float: unset;
            margin: 0 5%;
        }
        ${ContributionsContainer} {
            justify-content: center;
        }
    }
`;
