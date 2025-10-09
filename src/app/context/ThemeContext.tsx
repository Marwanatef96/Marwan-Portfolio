/** @format */

"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    mode: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    mode: "dark",
    toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mode, setMode] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // Check local storage for saved theme preference
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (savedTheme) {
            setMode(savedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setMode(prefersDark ? "dark" : "light");
        }
    }, []);

    const toggleTheme = () => {
        const newMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        localStorage.setItem("theme", newMode);
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
