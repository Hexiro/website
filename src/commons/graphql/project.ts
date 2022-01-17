import gql from "commons/graphql/gql";

export const PROJECTS = gql`
    {
        viewer {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        descriptionHTML
                        url
                        owner {
                            login
                        }
                        stargazers {
                            totalCount
                        }
                        forks {
                            totalCount
                        }
                        primaryLanguage {
                            name
                        }
                        defaultBranchRef {
                            target {
                                ... on Commit {
                                    history {
                                        totalCount
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
