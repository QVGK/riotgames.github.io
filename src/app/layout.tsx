// Type Definitions
import type { Metadata } from "next";

// CSS
import "@/css/globals.css";

// Fonts
import { Inter } from "next/font/google";
const interFont = Inter({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
    title: "Riot Games | Open Source",
    description: "Riot Games' Open Source GitHub Organization.",
    themeColor: "#EB0029",
};

// Layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={interFont.className}>{children}</body>
        </html>
    );
}
