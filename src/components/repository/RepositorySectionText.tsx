import type { BoxProps } from "@chakra-ui/react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface RepositorySectionTextProps extends BoxProps {
    title: string;
    description: string;
    onRight?: boolean;
}

export default function RepositorySectionText({
    title,
    description,
    onRight,
    ...rest
}: RepositorySectionTextProps) {
    return (
        <Box
            textAlign={{ base: "center", lg: onRight ? "right" : "left" }}
            {...rest}
            maxWidth="container.md"
            alignSelf={onRight ? "flex-end" : undefined}
            paddingBottom={4}
        >
            <Heading textTransform="capitalize">{title}</Heading>
            <Text>{description}</Text>
        </Box>
    );
}
