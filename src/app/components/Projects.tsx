/** @format */

"use client";

import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
    const theme = useTheme();

    return (
        <Box
            id='projects'
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 8 },
                py: 10,
                backgroundColor: theme.palette.background.default,
            }}>
            <Box sx={{ maxWidth: "1200px", width: "100%" }}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    <Typography
                        variant='h3'
                        sx={{
                            textAlign: "center",
                            fontWeight: 700,
                            color: theme.palette.primary.main,
                            mb: 2,
                        }}>
                        Projects
                    </Typography>

                    <Typography
                        variant='body1'
                        sx={{
                            textAlign: "center",
                            color: theme.palette.text.secondary,
                            mb: 6,
                        }}>
                        Some of my favorite projects — built with passion,
                        performance, and clean design.
                    </Typography>
                </motion.div>

                {/* Project Grid */}
                <Grid container spacing={4} justifyContent='center'>
                    {projects.map((project, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <Card
                                    sx={{
                                        background:
                                            theme.palette.background.paper,
                                        backdropFilter: "blur(10px)",
                                        border: `1px solid ${theme.palette.primary.main}33`,
                                        borderRadius: "1rem",
                                        boxShadow: `0 4px 20px ${theme.palette.primary.main}22`,
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            boxShadow: `0 8px 25px ${theme.palette.primary.main}44`,
                                        },
                                    }}>
                                    <CardMedia
                                        component='img'
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            height: 200,
                                            objectFit: "cover",
                                            borderTopLeftRadius: "1rem",
                                            borderTopRightRadius: "1rem",
                                        }}
                                    />
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                fontWeight: 700,
                                                color: theme.palette.text
                                                    .primary,
                                                mb: 1,
                                            }}>
                                            {project.title}
                                        </Typography>

                                        <Typography
                                            variant='body2'
                                            sx={{
                                                color: theme.palette.text
                                                    .secondary,
                                                mb: 2,
                                                minHeight: "48px",
                                            }}>
                                            {project.description}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                gap: 1.5,
                                                flexWrap: "wrap",
                                                mb: 2,
                                            }}>
                                            {project.tech.map((t, j) => (
                                                <Typography
                                                    key={j}
                                                    variant='caption'
                                                    sx={{
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: "9999px",
                                                        backgroundColor: `${theme.palette.primary.main}22`,
                                                        color: theme.palette
                                                            .primary.main,
                                                        fontWeight: 600,
                                                    }}>
                                                    {t}
                                                </Typography>
                                            ))}
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 2,
                                                justifyContent: "center",
                                            }}>
                                            {project.demo && (
                                                <Button
                                                    size='small'
                                                    variant='contained'
                                                    href={project.demo}
                                                    target='_blank'
                                                    sx={{
                                                        backgroundColor:
                                                            theme.palette
                                                                .primary.main,
                                                        color: theme.palette
                                                            .primary
                                                            .contrastText,
                                                        fontWeight: 600,
                                                        "&:hover": {
                                                            backgroundColor: `${theme.palette.primary.main}cc`,
                                                        },
                                                    }}>
                                                    Live Demo
                                                </Button>
                                            )}
                                            {project.github && (
                                                <Button
                                                    size='small'
                                                    variant='outlined'
                                                    href={project.github}
                                                    target='_blank'
                                                    sx={{
                                                        borderColor:
                                                            theme.palette
                                                                .primary.main,
                                                        color: theme.palette
                                                            .primary.main,
                                                        fontWeight: 600,
                                                        "&:hover": {
                                                            borderColor: `${theme.palette.primary.main}cc`,
                                                            backgroundColor: `${theme.palette.primary.main}15`,
                                                        },
                                                    }}>
                                                    GitHub
                                                </Button>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
