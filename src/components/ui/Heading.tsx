import { styled } from "@/theme";

const Heading = styled("h1", {
    color: "$brand-primary",
    fontFamily: "$heading",
    variants: {
        as: {
            h1: {
                fontSize: 54,
                fontWeight: 800,

                "@lg": {
                    fontSize: 64,
                },
            },
            h2: {
                fontSize: 36,
                fontWeight: 700,

                "@lg": {
                    fontSize: 40,
                },
            },
            h3: {
                fontSize: 24,
                fontWeight: 600,
            },
        },
        ellipsis: {
            true: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
            },
        },
    },
});
export default Heading;