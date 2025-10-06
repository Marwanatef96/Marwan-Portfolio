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

// Titles moved to module scope so they are stable and don't need to be added to effect deps
const TITLES = [
    "Front-End Engineer",
    "React Developer",
    "Next.js Developer",
    "UI Designer",
];

export default function Hero() {
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
                bgcolor: "#1a1a1a",
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
                    background:
                        "linear-gradient(to bottom right, #1a1a1a, rgba(26,26,26,0.95))",
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
                                    backgroundColor: "#2c2c2c",
                                    boxShadow:
                                        "0 0 25px -5px rgba(244, 192, 37, 0.3), 0 0 15px -5px rgba(244, 192, 37, 0.2)",
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
                                    bgcolor: "#444",
                                    color: "#aaa",
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
                                backgroundColor: "rgba(44,44,44,0.5)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                backdropFilter: "blur(20px)",
                                boxShadow:
                                    "0 0 40px rgba(0,0,0,0.6), inset 0 0 2px rgba(255,255,255,0.05)",
                            }}>
                            <Typography
                                variant='h3'
                                sx={{
                                    fontWeight: 900,
                                    color: "#fff",
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
                                        color: "#f4c025",
                                    }}>
                                    Marwan Atef
                                </Box>{" "}
                                👋
                                <br />
                                <Box
                                    component={motion.span}
                                    key={displayed}
                                    sx={{
                                        color: "#f4c025",
                                        display: "inline-block",
                                        fontFamily: "monospace",
                                        borderRight: "3px solid #f4c025",
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
                                    color: "#ccc",
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
                                            backgroundColor: "#f4c025",
                                            color: "#1a1a1a",
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(244,192,37,0.9)",
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
                                            borderColor: "#f4c025",
                                            color: "#f4c025",
                                            "&:hover": {
                                                backgroundColor:
                                                    "rgba(244,192,37,0.1)",
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
