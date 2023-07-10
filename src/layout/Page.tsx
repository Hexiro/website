import { memo } from "react";

import { twMerge } from "tailwind-merge";

function Page({ cssVariables, children }: { cssVariables: string[]; children: React.ReactNode }) {
    return (
        <div
            className={twMerge(
                "min-w-screen relative flex h-full min-h-screen w-full flex-col overflow-y-auto overflow-x-hidden bg-background md:flex-row",
                ...cssVariables
            )}
        >
            {children}
        </div>
    );
}

export default memo(Page);
