// public

export const Github = "Hexiro";
export const Twitter = "Hexiiro";
export const Discord = "291632819006865408";
export const Steam = "76561199033382814";

const birthday = Date.parse("2005-07-02T00:00:00-0500");

export const Age = (): number => {
    // subtract birth time from now and do some math with the seconds to get years
    const date = Date.now();
    return Math.floor((date - birthday) / 31556952000);
};

export const GithubLink = `https://github.com/${Github}`;
export const TwitterLink = `https://twitter.com/${Twitter}`;
export const SteamLink = `https://steamcommunity.com/profiles/${Steam}`;

// private

export const GithubToken = process.env.GITHUB_TOKEN || "";