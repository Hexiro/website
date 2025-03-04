import type { ReactNode } from "react";

interface ContentProps {
    readonly children: ReactNode;
}

export default function Content({ children }: ContentProps) {
    return (
        <main className="mt-32 flex min-h-screen w-full flex-col rounded-t-md bg-background px-[5%] py-20 lg:ml-52 lg:mt-0 lg:rounded-l-md lg:px-[min(10%,192px)]">
            {children}
        </main>
    );
}
