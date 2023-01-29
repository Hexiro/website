import { styled } from "@/theme";

const Paragraph = styled("p", {
    color: "$text-secondary",
    fontFamily: "$text",
    lineHeight: 1.5,
    maxWidth: 700,

    defaultVariants: {
        size: "md",
    },

    variants: {
        size: {
            sm: {
                fontSize: 16,
                fontWeight: 500,
            },
            md: { fontSize: 20, fontWeight: 500 },
            lg: {
                fontSize: 26,
                fontWeight: 600,
            },
        },
        align: {
            center: {
                textAlign: "center",
            },
            left: {
                textAlign: "left",
            },
            right: {
                textAlign: "right",
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

export default Paragraph;
