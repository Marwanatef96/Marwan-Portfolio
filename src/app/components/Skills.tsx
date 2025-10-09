/** @format */

"use client";

import React from "react";
import { Box, Typography, Grid, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

// ✅ Use these instead of Lucide
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMui,
    SiJavascript,
    SiTypescript,
    SiRedux,
    SiFramer,
} from "react-icons/si";

export default function Skills() {
    const theme = useTheme();

    const iconMap: Record<string, React.ReactNode> = {
        React: <FaReact color='#61DBFB' size={28} />,
        "Next.js": <SiNextdotjs color='#fff' size={28} />,
        JavaScript: <SiJavascript color='#f7df1e' size={28} />,
        TypeScript: <SiTypescript color='#3178c6' size={28} />,
        HTML: <FaHtml5 color='#e44d26' size={28} />,
        CSS: <FaCss3Alt color='#1572b6' size={28} />,
        MUI: <SiMui color='#007FFF' size={28} />,
        "Tailwind CSS": <SiTailwindcss color='#38bdf8' size={28} />,
        Git: <FaGitAlt color='#f1502f' size={28} />,

        zustand: "🐻",
        Redux: <SiRedux color='#764abc' size={28} />,
        "Framer Motion": <SiFramer color='#29d8c6' size={28} />,
    };

    return (
        <Box
            id='skills'
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 8 },
                py: 12,
                backgroundColor: theme.palette.background.paper,
            }}>
            <Box sx={{ maxWidth: "1100px", width: "100%" }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    <Typography
                        variant='h3'
                        textAlign='center'
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: theme.palette.primary.main,
                        }}>
                        My Skills
                    </Typography>
                    <Typography
                        textAlign='center'
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 8,
                        }}>
                        Technologies I use to craft modern, responsive, and
                        dynamic web apps.
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent='center'>
                    {skills.map((skill, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        borderRadius: "1rem",
                                        background:
                                            theme.palette.background.paper,
                                        backdropFilter: "blur(10px)",
                                        border: `1px solid ${theme.palette.primary.main}33`,
                                        boxShadow: `0 4px 15px ${theme.palette.primary.main}15`,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: `0 6px 25px ${theme.palette.primary.main}30`,
                                        },
                                    }}>
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            backgroundColor: `${theme.palette.primary.main}20`,
                                        }}>
                                        {iconMap[skill.name]}
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text
                                                    .primary,
                                            }}>
                                            {skill.name}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            sx={{
                                                color: theme.palette.text
                                                    .secondary,
                                            }}>
                                            {skill.level}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
