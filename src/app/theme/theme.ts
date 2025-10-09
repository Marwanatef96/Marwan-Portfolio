/** @format */

"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
    palette: {
        mode,
        primary: {
            main: "#f4c025", // Gold accent stays consistent in both themes
            ...(mode === "light"
                ? { contrastText: "#181818" }
                : { contrastText: "#181818" }),
        },
        secondary: {
            main: "#29d8c6", // Teal accent stays consistent
            ...(mode === "light"
                ? { contrastText: "#181818" }
                : { contrastText: "#181818" }),
        },
        error: {
            main: "#ff4c4c",
        },
        warning: {
            main: "#ffb300",
        },
        info: {
            main: "#2196f3",
        },
        success: {
            main: "#4caf50",
        },
        background: {
            ...(mode === "light"
                ? {
                      default: "#ffffff",
                      paper: "#f8f9fa",
                  }
                : {
                      default: "#0d0d0d",
                      paper: "#181818",
                  }),
        },
        text: {
            ...(mode === "light"
                ? {
                      primary: "#2d3436",
                      secondary: "#636e72",
                      disabled: "#b2bec3",
                  }
                : {
                      primary: "#f8f8f5",
                      secondary: "#b3b3b3",
                      disabled: "#666666",
                  }),
        },
        divider: mode === "light" ? "#e9ecef" : "#222222",
        action: {
            ...(mode === "light"
                ? {
                      active: "#f4c025",
                      hover: "#f8f9fa",
                      selected: "#e9ecef",
                      disabled: "#dee2e6",
                      disabledBackground: "#f1f3f5",
                  }
                : {
                      active: "#f4c025",
                      hover: "#232323",
                      selected: "#232323",
                      disabled: "#444444",
                      disabledBackground: "#222222",
                  }),
        },
    },
});

// You can switch between themes by changing mode to "light" or "dark"
export const theme = createTheme({
    ...getDesignTokens("dark"),
    palette: {
        mode: "dark",
        primary: {
            main: "#f4c025", // Gold accent
            contrastText: "#181818", // For buttons, chips, etc.
        },
        secondary: {
            main: "#29d8c6", // Teal accent
            contrastText: "#181818",
        },
        error: {
            main: "#ff4c4c",
        },
        warning: {
            main: "#ffb300",
        },
        info: {
            main: "#2196f3",
        },
        success: {
            main: "#4caf50",
        },
        background: {
            default: "#0d0d0d", // Main background
            paper: "#181818", // Card/paper backgrounds
        },
        text: {
            primary: "#f8f8f5", // Main text
            secondary: "#b3b3b3", // Subtext
            disabled: "#666",
        },
        divider: "#222", // Divider lines
        action: {
            active: "#f4c025",
            hover: "#232323",
            selected: "#232323",
            disabled: "#444",
            disabledBackground: "#222",
        },
    },
    typography: {
        fontFamily: "Inter, 'Poppins', 'Roboto', sans-serif",
        fontWeightRegular: 400,
        fontWeightBold: 700,
        fontWeightLight: 300,
        fontWeightMedium: 500,
        h1: {
            fontSize: "3rem",
            fontWeight: 900,
        },
        h2: {
            fontSize: "2.4rem",
            fontWeight: 800,
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 700,
            color: "#f4c025", // Keep accent color consistent
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 700,
        },
        h5: {
            fontSize: "1.2rem",
            fontWeight: 600,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 600,
        },
        body1: {
            fontSize: "1.1rem",
        },
        body2: {
            fontSize: "1rem",
        },
    },
    shape: { borderRadius: 16 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 700,
                },
                containedPrimary: {
                    backgroundColor: "#f4c025",
                    color: "#181818",
                    "&:hover": {
                        backgroundColor: "#e6b800",
                    },
                },
                outlinedPrimary: {
                    borderColor: "#f4c025",
                    color: "#f4c025",
                    "&:hover": {
                        backgroundColor: "rgba(244,192,37,0.1)",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                }),
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor:
                        theme.palette.mode === "light"
                            ? theme.palette.background.paper
                            : "#121212",
                    color: theme.palette.text.primary,
                }),
            },
        },
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    borderRadius: 16,
                }),
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.divider,
                }),
            },
        },
    },
});
