/** @format */

import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";
import ThemeProviderClient from "./ThemeProviderClient";
import type { Metadata } from "next";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Marwan Atef - Front-End Engineer",
    description:
        "Modern front-end developer portfolio built with Next.js and MUI. Designed and developed by Marwan Atef.",
    keywords: ["Next.js", "React", "MUI", "Frontend Developer", "Portfolio"],
};

const skipLinkStyles = `
.skip-link {
	position: absolute;
	left: -9999px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}
.skip-link:focus {
	position: static;
	width: auto;
	height: auto;
	left: auto;
	padding: 0.5rem 1rem;
	background: #111;
	color: #f4c025;
	border-radius: 6px;
	z-index: 9999;
}
`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={inter.className} suppressHydrationWarning>
            <body>
                <ThemeProviderClient>
                    <Navbar />
                    <main id='main' tabIndex={-1}>
                        {children}
                    </main>
                </ThemeProviderClient>
            </body>
        </html>
    );
}
