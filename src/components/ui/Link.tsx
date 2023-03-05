import type { Media, CSS } from "@/theme";
import { styled } from "@/theme";
import type { ComponentProps, VariantProps } from "@stitches/react";
import type { StyledComponent } from "@stitches/react/types/styled-component";

import NextLink from "next/link";
import type { PropsWithChildren } from "react";

import { Span } from "@/components/ui";

type SpanProps = VariantProps<typeof Span>;

type LinkProps = Omit<ComponentProps<Anchor>, "target"> &
    SpanProps & {
        href: string;
        newTab?: boolean;
    };

const Link = ({ href, newTab, animation, color, lineHeight, ...props }: LinkProps) => (
    <WithSpan animation={animation} color={color} lineHeight={lineHeight}>
        <LinkWrapper
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noreferrer" : undefined}
            {...props}
        />
    </WithSpan>
);

type Anchor = StyledComponent<"a", {}, Media, CSS>;

const LinkWrapper = styled(NextLink, {
    display: "inline-block",
    textDecoration: "inherit",
    color: "inherit",
});

const WithSpan = ({ animation, color, lineHeight, children }: PropsWithChildren<SpanProps>) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    if (!animation && !color && !lineHeight) return <>{children}</>;
    return (
        <Span animation={animation} color={color} lineHeight={lineHeight}>
            {children}
        </Span>
    );
};

export default Link;
