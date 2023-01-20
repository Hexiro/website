import { styled } from "theme";

import { createElement, useState } from "react";

import type { IconType } from "commons/icons";
import MenuItem from "components/MenuItem";
import AnchorList from "components/common/AnchorList";
import Heading from "components/common/Heading";
import ListItem from "components/common/ListItem";
import Span from "components/common/Span";
import Hide from "components/layout/Hide";
import Show from "components/layout/Show";
import Route from "components/nav/Route";
import type { Variants, Transition } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

export interface NavRoute {
    name: string;
    href: string;
    icon: IconType;
}

interface NavProps {
    routes: NavRoute[];
    socials: NavRoute[];
}

const transition: Transition = {
    type: "spring",
    duration: 0.45,
    bounce: 0.5,
};

const variants: Variants = {
    animate: {
        scale: 1,
        opacity: 1,
    },
    initial: {
        scale: 0.8,
        opacity: 0,
    },
};

export default function Nav({ routes, socials }: NavProps) {
    const [selectedRoute, setSelectedRoute] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [hoveredMenuItem, setHoveredMenuItem] = useState<number | null>(null);

    return (
        <NavContainer>
            <NavLeft>
                <Heading as="h2">
                    hexiro<Span color="brand-accent">.me</Span>
                </Heading>
                <Hide below="md">
                    <UnorderedList>
                        {routes.map(({ name, href }, index) => (
                            <Route
                                key={name}
                                name={name}
                                href={href}
                                isSelected={index === selectedRoute}
                            />
                        ))}
                    </UnorderedList>
                </Hide>
                <Show below="md">
                    <ListItem as="p">Portfolio</ListItem>
                </Show>
            </NavLeft>
            <NavRight>
                <Hide below="md">
                    <AnchorList.List>
                        {socials.map(({ name, href, icon }) => (
                            <AnchorList.Item key={name} newTab href={href}>
                                {createElement(icon)}
                            </AnchorList.Item>
                        ))}
                    </AnchorList.List>
                </Hide>
                <Show below="md">
                    <StyledHamburger
                        rounded
                        size={30}
                        label="Open menu"
                        onToggle={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <AnimatePresence>
                        {isMenuOpen && (
                            <Menu
                                variants={variants}
                                transition={transition}
                                initial="initial"
                                animate="animate"
                                exit="initial"
                                onHoverEnd={() => setHoveredMenuItem(null)}
                            >
                                {routes.map(({ name, href, icon }, index) => (
                                    <MenuItem
                                        key={name}
                                        name={name}
                                        href={href}
                                        icon={icon}
                                        highlighted={index === selectedRoute}
                                        isSelected={index === hoveredMenuItem}
                                        onHoverStart={() => setHoveredMenuItem(index)}
                                    />
                                ))}
                                <Divider />
                                {socials.map(({ name, href, icon }, index) => (
                                    <MenuItem
                                        key={name}
                                        newTab
                                        name={name}
                                        href={href}
                                        icon={icon}
                                        isSelected={index + routes.length === hoveredMenuItem}
                                        onHoverStart={() =>
                                            setHoveredMenuItem(index + routes.length)
                                        }
                                    />
                                ))}
                            </Menu>
                        )}
                    </AnimatePresence>
                </Show>
            </NavRight>
        </NavContainer>
    );
}

const StyledHamburger = styled(Hamburger, {
    color: "$text-primary",
});

const NavContainer = styled("nav", {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingY: 25,
    paddingX: "$main-lr-padding",
    borderBottom: "2px solid $lighten-10",
});

const NavLeft = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: "$4",
});

const NavRight = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "auto",
    paddingLeft: "$4",
});

const UnorderedList = styled("ul", {
    display: "flex",
    flexDirection: "row",
    gap: "$2",
    width: "100%",

    "@lg": {
        gap: "$3",
    },
});

const Menu = styled(motion.ul, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "$2",
    width: "14em",
    listStyle: "none",

    willChange: "transform",
    transformOrigin: "top right",

    backgroundColor: "$background-secondary",
    borderRadius: "$lg",
    border: "solid 1px $lighten-10",

    right: "$main-lr-padding",
    top: "90%",

    paddingY: "20px",
});

const Divider = styled("hr", {
    width: "100%",
    borderBottom: "1px solid $lighten-10",
    marginY: "12px",
});
