import { To } from "components";

import { Element } from "domhandler";
import type { HTMLReactParserOptions } from "html-react-parser";
import parse, { domToReact } from "html-react-parser";

// returns string, JSX.Element[], JSX.Element all as JSX.Element
export const ParseHTML = ({ html }: { html: string }): JSX.Element => <>{parse(html, options)}</>;

const options: HTMLReactParserOptions = {
    trim: true,
    replace: element => {
        if (!(element instanceof Element)) return;
        if (element.name === "script") {
            return null;
        }

        if (element.name === "a") {
            return (
                <To newTab href={element.attribs.href}>
                    {domToReact(element.children)}
                </To>
            );
        }

        // g(ithub)-emoji
        if (element.name === "g-emoji") {
            return <>{domToReact(element.children)}</>;
        }
    },
};