import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <div >
            <div>
                {children}
            </div>
        </div>
    );
}

