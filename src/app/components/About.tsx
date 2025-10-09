/** @format */

"use client";

import { motion } from "framer-motion";
import { Box, Typography, Grid, Paper, useTheme } from "@mui/material";
import { Code, Palette, Zap, Smartphone } from "lucide-react";

export default function About() {
    const theme = useTheme();

    const features = [
        {
            icon: <Palette size={30} color={theme.palette.primary.main} />,
            title: "UI/UX Design",
        },
        {
            icon: <Code size={30} color={theme.palette.primary.main} />,
            title: "Clean Code",
        },
        {
            icon: <Zap size={30} color={theme.palette.primary.main} />,
            title: "Performance",
        },
        {
            icon: <Smartphone size={30} color={theme.palette.primary.main} />,
            title: "Responsive Design",
        },
    ];

    return (
        <Box
            id='about'
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 3, md: 8 },
                py: 12,
                backgroundColor: theme.palette.background.default,
            }}>
            <Grid
                container
                spacing={6}
                alignItems='center'
                justifyContent='center'
                sx={{ width: "100%" }}>
                <Grid size={{ xs: 12, md: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}>
                        <Typography
                            variant='h3'
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                mb: 3,
                                textAlign: "center",
                            }}>
                            About Me
                        </Typography>

                        <Typography
                            variant='body1'
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "1.15rem",
                                lineHeight: 1.9,
                                textAlign: "center",
                                maxWidth: "800px",
                                mx: "auto",
                                mb: 6,
                            }}>
                            I’m{" "}
                            <strong
                                style={{ color: theme.palette.primary.main }}>
                                Marwan Atef
                            </strong>
                            , a passionate <strong>Front-End Engineer</strong>{" "}
                            who loves turning complex ideas into simple, elegant
                            user interfaces.
                            <br />
                            <br />I enjoy building fast, modern web applications
                            with a strong focus on clean architecture, seamless
                            UX, and performance.
                        </Typography>

                        {/* What I Do Section */}
                        <Grid
                            container
                            spacing={4}
                            justifyContent='center'
                            maxWidth='lg'>
                            {features.map((f, i) => (
                                <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                        }}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                textAlign: "center",
                                                p: 3,
                                                borderRadius: 4,
                                                backgroundColor:
                                                    theme.palette.background
                                                        .paper,
                                                border: `1px solid ${theme.palette.primary.main}25`,
                                                height: "100%",
                                                boxShadow: `0 0 15px ${theme.palette.background.default}4d`,
                                            }}>
                                            <Box sx={{ mb: 2 }}>{f.icon}</Box>
                                            <Typography
                                                variant='h6'
                                                sx={{
                                                    fontWeight: 700,
                                                    color: theme.palette.text
                                                        .primary,
                                                    mb: 1,
                                                }}>
                                                {f.title}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
}
