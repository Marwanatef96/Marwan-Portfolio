/** @format */

"use client";

import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Stack,
    Avatar,
    Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

// Titles moved to module scope so they are stable and don't need to be added to effect deps
const TITLES = [
    "Front-End Engineer",
    "React Developer",
    "Next.js Developer",
    "UI Designer",
];

export default function Hero() {
    const theme = useTheme();
    // Typing animation

    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = TITLES[index];
        const speed = deleting ? 40 : 100;
        let timeout: NodeJS.Timeout;

        if (!deleting && displayed === current) {
            timeout = setTimeout(() => setDeleting(true), 1200);
        } else if (deleting && displayed === "") {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % TITLES.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayed((prev) =>
                    deleting
                        ? current.slice(0, prev.length - 1)
                        : current.slice(0, prev.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, index]);

    return (
        <Box
            id='home'
            sx={{
                minHeight: "100vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                bgcolor: theme.palette.background.paper,
                fontFamily: "'Poppins', sans-serif",
            }}>
            {/* Background image and overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB57PzWyHKu0ljmo64xordMLdVXTo_aUlrXGvQQJo2UMfgDHH0iUWfTOjGegMM0u6xy4YZNrNNIbBUfqgGCeP4nlBW_qNE-VBoHdgIkeCcxrxXrw7Iy-cJAX0hHhjEtMQCXCMpY_xiBKmUyUtAh7Mz-9b3LoDyKx7XPgLiJxfQTQ35V8qfwZ-KNo8BaCXMW19_rTzYY9c0mTY94xfIqJ9TJ4cDNvhlmuUPWXFaBsM2mlRj7bCtFs2n-UjAB8qODOnoeEmUWp_Zitzo')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.1,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: `linear-gradient(to bottom right, ${theme.palette.background.paper}, ${theme.palette.background.paper}f2)`,
                }}
            />

            {/* Content */}
            <Container maxWidth='lg' sx={{ position: "relative", zIndex: 2 }}>
                <Grid
                    container
                    spacing={6}
                    alignItems='center'
                    justifyContent='center'
                    sx={{ py: { xs: 6, md: 12 } }}>
                    {/* Avatar section */}
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: { xs: 260, md: 320 },
                                height: { xs: 260, md: 320 },
                            }}>
                            <Box
                                component={motion.div}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "50%",
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    boxShadow: `0 0 25px -5px ${theme.palette.primary.main}4d, 0 0 15px -5px ${theme.palette.primary.main}33`,
                                }}
                            />
                            <Avatar
                                alt='Marwan Atef'
                                src='/avatar.png'
                                sx={{
                                    position: "absolute",
                                    inset: 16,
                                    width: "calc(100% - 32px)",
                                    height: "calc(100% - 32px)",
                                    bgcolor:
                                        theme.palette.action.disabledBackground,
                                    color: theme.palette.action.disabled,
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Text + Buttons */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Paper
                            component={motion.div}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            sx={{
                                p: { xs: 4, md: 6 },
                                textAlign: { xs: "center", md: "left" },
                                borderRadius: "1rem",
                                backgroundColor:
                                    theme.palette.background.paper + "80",
                                border: `1px solid ${theme.palette.primary.main}20`,
                                backdropFilter: "blur(20px)",
                                boxShadow: `0 0 40px ${theme.palette.background.default}99, inset 0 0 2px ${theme.palette.text.primary}0d`,
                            }}>
                            <Typography
                                variant='h3'
                                sx={{
                                    fontWeight: 900,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    lineHeight: 1.15,
                                    fontSize: {
                                        xs: "1.8rem", // small phones
                                        sm: "2.4rem", // larger phones
                                        md: "3rem", // tablets
                                        lg: "3.6rem", // desktops
                                    },
                                }}>
                                Hi, I’m{" "}
                                <Box
                                    component='span'
                                    sx={{
                                        color: theme.palette.primary.main,
                                    }}>
                                    Marwan Atef
                                </Box>{" "}
                                👋
                                <br />
                                <Box
                                    component={motion.span}
                                    key={displayed}
                                    sx={{
                                        color: theme.palette.primary.main,
                                        display: "inline-block",
                                        fontFamily: "monospace",
                                        borderRight: `3px solid ${theme.palette.primary.main}`,
                                        pr: "6px",
                                        whiteSpace: "nowrap",
                                        // Responsive font sizes to scale with heading
                                        fontSize: {
                                            xs: "1.1rem",
                                            sm: "1.4rem",
                                            md: "1.9rem",
                                            lg: "2.4rem",
                                        },
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                    }}>
                                    {displayed}
                                </Box>
                            </Typography>

                            <Typography
                                variant='h6'
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 4,
                                    maxWidth: 500,
                                    mx: { xs: "auto", md: 0 },
                                    lineHeight: 1.6,
                                    fontSize: {
                                        xs: "0.95rem",
                                        md: "1.125rem",
                                    },
                                }}>
                                I build modern, fast, and responsive web
                                applications using <strong>Next.js</strong>,{" "}
                                <strong>React</strong>, and{" "}
                                <strong>TypeScript</strong>.
                            </Typography>

                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                justifyContent={{
                                    xs: "center",
                                    md: "flex-start",
                                }}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}>
                                    <Button
                                        variant='contained'
                                        size='large'
                                        href='https://drive.google.com/file/d/1orT4iR7d1mJSh7H38xjs7NjJS4nHYnjQ/view?usp=sharing'
                                        target='_blank'
                                        sx={{
                                            px: 5,
                                            fontWeight: 700,
                                            backgroundColor:
                                                theme.palette.primary.main,
                                            color: theme.palette.background
                                                .default,
                                            "&:hover": {
                                                backgroundColor:
                                                    theme.palette.primary.light,
                                            },
                                        }}>
                                        Check My CV
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}>
                                    <Button
                                        variant='outlined'
                                        size='large'
                                        href='#projects'
                                        sx={{
                                            px: 5,
                                            fontWeight: 700,
                                            borderColor:
                                                theme.palette.primary.main,
                                            color: theme.palette.primary.main,
                                            "&:hover": {
                                                backgroundColor:
                                                    theme.palette.primary.main +
                                                    "1A",
                                            },
                                        }}>
                                        View Projects
                                    </Button>
                                </motion.div>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
