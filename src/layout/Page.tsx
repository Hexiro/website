import { styled } from "@/theme";
import type { ComponentProps } from "@stitches/react";

import type { PropsWithChildren } from "react";

import { slideFromLeft, staggerChildren } from "@/commons/framer";

import { Subheading, Heading, Paragraph } from "@/components/ui";

import { motion } from "framer-motion";
import { SEO } from "layout/SEO";

type PageProps = PropsWithChildren<ComponentProps<typeof PageContainer>> & {
    name: string;
    description: string;
    subheading?: string;
    nameElement?: () => JSX.Element;
    descriptionElement?: () => JSX.Element;
    subheadingElement?: () => JSX.Element;
};

export default function Page({
    name,
    description,
    subheading,
    nameElement,
    descriptionElement,
    subheadingElement,
    children,
    ...props
}: PageProps) {
    return (
        <>
            <PageContainer
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                exit="initial"
                {...props}
            >
                {subheading ? (
                    <motion.div variants={slideFromLeft}>
                        {subheadingElement ? (
                            subheadingElement()
                        ) : (
                            <Subheading>{subheading}</Subheading>
                        )}
                    </motion.div>
                ) : null}
                <motion.div variants={slideFromLeft}>
                    {nameElement ? nameElement() : <Heading as="h1">{name}</Heading>}
                </motion.div>
                <motion.div variants={slideFromLeft}>
                    {descriptionElement ? (
                        descriptionElement()
                    ) : (
                        <Paragraph size="lg">{description}</Paragraph>
                    )}
                </motion.div>
                {children}
            </PageContainer>
            <SEO name={name} description={description} />
        </>
    );
}

const PageContainer = styled(motion.main, {
    position: "relative",
    flexGrow: 1,
    height: "100%",
    minHeight: "100vh",
    paddingTop: 64,
    paddingBottom: 100,
    paddingX: "$main-x-padding",

    "&:first-of-type": {
        paddingTop: 264,
    },
});
