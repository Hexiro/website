import { NextPageContext } from "next";

import { ErrorPage } from "components/pages";

interface ErrorProps {
    statusCode?: number;
}

function ErrorHandler({ statusCode }: ErrorProps): JSX.Element {
    return (
        <ErrorPage
            status={statusCode || "Client Error"}
            message="Oops? Well that wasn't supposed to happen!"
        />
    );
}

ErrorHandler.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
    let statusCode: number | undefined;
    if (res) {
        statusCode = res.statusCode;
    } else if (err && err.statusCode) {
        statusCode = err.statusCode;
    }
    return { statusCode };
};

export default ErrorHandler;
