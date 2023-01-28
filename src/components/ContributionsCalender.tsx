import { theme, css, styled } from "@/theme";

import { Heading, ImportantContainer, Paragraph } from "@/components/ui";
import type { GitHubContributionsCalendar } from "@/data/contributionsCalendar";

import Calendar from "react-github-contribution-calendar";

interface ContributionsCalendarProps {
    data: GitHubContributionsCalendar;
}

export default function ContributionsCalendar({ data }: ContributionsCalendarProps) {
    const transformed: Record<string, number> = Object.fromEntries(
        data.map(({ date, count }) => [date, count])
    );

    const today = new Date();
    const until = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const sum = data.reduce((acc, { count }) => acc + count, 0);

    return (
        <ContributionsContainer>
            <Text>
                <Heading as="h3">Contributions Calendar</Heading>
                <Paragraph>{`${sum.toLocaleString()} contributions in the last year`}</Paragraph>
            </Text>
            <Calendar
                values={transformed}
                panelColors={[
                    theme.colors["background-tertiary"].computedValue,
                    `rgba(${theme.colors["brand-primary-rgb"].computedValue}, 0.15)`,
                    `rgba(${theme.colors["brand-primary-rgb"].computedValue}, 0.3)`,
                    `rgba(${theme.colors["brand-primary-rgb"].computedValue}, 0.45)`,
                    `rgba(${theme.colors["brand-primary-rgb"].computedValue}, 0.7)`,
                ]}
                until={until}
                weekLabelAttributes={{ className: String(labelStyles) }}
                monthLabelAttributes={{ className: String(labelStyles) }}
                panelAttributes={{ className: String(panelStyles) }}
            />
        </ContributionsContainer>
    );
}

const labelStyles = css({
    fontFamily: "$text",
    fontWeight: 800,
    color: "$text-primary",
});

const panelStyles = css({
    rx: "$radii$sm",
    ry: "$radii$sm",
});

const ContributionsContainer = styled(ImportantContainer, {
    maxWidth: 756,
    flexDirection: "column",
});

const Text = styled("div", {
    marginBottom: "$4",
});
