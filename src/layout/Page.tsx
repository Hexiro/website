import { styled } from "@/theme";
import type { ComponentProps } from "@stitches/react";

import type { PropsWithChildren } from "react";

import { slideFromLeft, staggerChildren } from "@/commons/animations";
import { pageAnimationOverAtom } from "@/commons/atoms";

import { Heading, Paragraph } from "@/components/ui";

import { Seo } from "@/layout/Seo";

import { motion } from "framer-motion";
import { useSetAtom } from "jotai";

type PageProps = PropsWithChildren<ComponentProps<typeof PageContainer>> & {
    name: string;
    description: string;
};

export default function Page({ name, description, children, ...props }: PageProps) {
    const setPageAnimationOver = useSetAtom(pageAnimationOverAtom);

    return (
        <>
            <PageContainer
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                exit="initial"
                onAnimationStart={() => setPageAnimationOver(false)}
                onAnimationComplete={() => setPageAnimationOver(true)}
                {...props}
            >
                {children}
            </PageContainer>
            <Seo name={name} description={description} />
        </>
    );
}

const PageContainer = styled(motion.main, {
    position: "relative",
    flexGrow: 1,
    height: "100%",
    minHeight: "100vh",
    paddingTop: 225,
    paddingBottom: 100,
    paddingX: "$main-x-padding",

    "@lg": {
        paddingX: "$main-x-padding-lg",
    },
});

const Subheading = styled("span", {
    color: "$text-primary",
    fontFamily: "$heading",
    fontSize: 40,
    fontWeight: 600,

    "@lg": {
        fontSize: 48,
    },
});

export const PageText = styled("div", {
    paddingBottom: "$7",
});

export const PageSubheading = (props: PropsWithChildren<ComponentProps<typeof Subheading>>) => (
    <motion.div variants={slideFromLeft}>
        <Subheading {...props} />
    </motion.div>
);

export const PageHeading = (props: PropsWithChildren<ComponentProps<typeof Heading>>) => (
    <motion.div variants={slideFromLeft}>
        <Heading as="h1" {...props} />
    </motion.div>
);

export const PageDescription = (props: PropsWithChildren<ComponentProps<typeof Paragraph>>) => (
    <motion.div variants={slideFromLeft}>
        <Paragraph size="lg" {...props} />
    </motion.div>
);
