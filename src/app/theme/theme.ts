/** @format */

"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#f4c025" },
        background: {
            default: "#0d0d0d",
            paper: "#1a1a1a",
        },
        text: {
            primary: "#f8f8f5",
            secondary: "#b3b3b3",
        },
    },
    typography: {
        fontFamily: "Inter, sans-serif",
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    shape: { borderRadius: 12 },
});
