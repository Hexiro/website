import Detail from "components/projects/details/Detail";

import { BiStar } from "react-icons/bi";

export const Stars = ({ stargazers }: { stargazers: number }): JSX.Element | null => {
    return (
        <Detail detail={stargazers}>
            <BiStar />
        </Detail>
    );
};