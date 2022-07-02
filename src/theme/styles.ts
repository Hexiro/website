export const styles = {
    global: {
        // css
        "::-webkit-scrollbar": {
            width: "0.35em",
            height: "0.35em",
        },
        "::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)",
            borderRadius: "xl",
        },
        "::-webkit-scrollbar-thumb": {
            background: "brand.primary",
            borderRadius: "xl",
        },
        "*:focus-visible": {
            outline: "none",
        },

        html: {
            scrollBehavior: "smooth",
        },
        body: {
            background: "background.primary",
            color: "brand.text",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.5,
            overflowX: "hidden",
        },
        ul: {
            listStyle: "none",
        },
        p: {
            color: "brand.subtext",
        },
        svg: {
            width: "auto",
            height: "100%",
            color: "brand.primary",
        },
        a: {
            textDecoration: "unset",
            color: "brand.primary",
        },
        "h1, h2, h3": {
            color: "brand.primary",
        },
        "h4, h5, h6": {
            color: "brand.text",
        },
        // chakra overrides
        "div[data-popper-arrow-inner]": {
            borderBottom: "1px",
            borderRight: "1px",
            borderColor: "whiteAlpha.300",
        },
        // h1: {
        //     fontSize: { base: "lg", sm: "lg", md: "xl" },
        //     fontWeight: 400,
        // },
        // h2: {
        //     fontSize: { base: "md", sm: "md", md: "lg" },
        // },

        // h3: {
        //     fontSize: { base: "sm", sm: "sm", md: "md" },
        // },

        // h4: {
        //     fontSize: { base: "xs", sm: "xs", md: "sm" },
        // },
    },
};

export default styles;