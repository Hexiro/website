import { styled } from "@/theme";

const Paragraph = styled("p", {
    color: "$text-secondary",
    fontFamily: "$text",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.5,
    maxWidth: 700,

    variants: {
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
    },
});

export default Paragraph;
