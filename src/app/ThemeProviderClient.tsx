/** @format */

"use client";

import { ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider, useThemeContext } from "./context/ThemeContext";
import { createTheme } from "@mui/material";

function ThemeProviderWithContext({ children }: { children: React.ReactNode }) {
    const { mode } = useThemeContext();
    const theme = createTheme(getDesignTokens(mode));

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default function ThemeProviderClient({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeContextProvider>
            <ThemeProviderWithContext>{children}</ThemeProviderWithContext>
        </ThemeContextProvider>
    );
}
