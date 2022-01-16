import { Header } from "components";
import { Page } from "components/pages";

import styled from "styled-components";

export const ErrorPage = ({ status, message }: ErrorPageProps): JSX.Element => {
    status = String(status);
    message = message ?? "Oops?";
    return (
        <Page name={status} description={message}>
            <Main>
                <Text>
                    <h1>
                        <Header>{status}</Header>
                    </h1>
                    <h2>{message}</h2>
                </Text>
            </Main>
        </Page>
    );
};

interface ErrorPageProps {
    status: number | string;
    message?: string;
}

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Text = styled.div`
    text-align: center;
`;
