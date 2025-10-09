/** @format */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useThemeContext } from "../context/ThemeContext";
import { useTheme } from "@mui/material/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const navLinks = ["Home", "About", "Skills","Projects",  "Contact"];

export default function Navbar() {
    const theme = useTheme();
    const { mode, toggleTheme } = useThemeContext();
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleDrawer = () => setMobileOpen(!mobileOpen);

    return (
        <Box component='nav' sx={{ pb: { xs: 6, md: 0 } }}>
            <style>{`html {scroll-behavior: smooth}`}</style>
            <AppBar
                position='fixed'
                color='transparent'
                sx={{
                    backdropFilter: "blur(10px)",
                    background: theme.palette.background.paper + "cc",
                    boxShadow: "none",
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo / Name */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <Typography
                            component='a'
                            href='#hero'
                            aria-label='Go to hero section'
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.primary.main,
                                letterSpacing: "1px",
                                textDecoration: "none",
                                fontSize: "1.2rem",
                            }}>
                            Marwan Atef
                        </Typography>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            gap: 3,
                        }}
                        role='navigation'
                        aria-label='Primary'>
                        {navLinks.map((link) => (
                            <motion.div
                                key={link}
                                whileHover={{ y: -3 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <Button
                                    component='a'
                                    href={`#${link.toLowerCase()}`}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: 500,
                                        textTransform: "none",
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                        },
                                    }}
                                    aria-label={`Go to ${link} section`}>
                                    {link}
                                </Button>
                            </motion.div>
                        ))}

                        {/* Social Icons */}
                        <Box sx={{ display: "flex", gap: 1.5, ml: 2 }}>
                            <IconButton
                                onClick={toggleTheme}
                                aria-label={`Switch to ${
                                    mode === "dark" ? "light" : "dark"
                                } mode`}
                                sx={{
                                    color: theme.palette.text.primary,
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                    },
                                }}>
                                {mode === "dark" ? (
                                    <Sun size={22} />
                                ) : (
                                    <Moon size={22} />
                                )}
                            </IconButton>
                            <IconButton
                                href='https://github.com/Marwanatef96'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Visit GitHub'
                                sx={{
                                    color: theme.palette.text.primary,
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                    },
                                }}>
                                <Github size={22} />
                            </IconButton>
                            <IconButton
                                href='https://linkedin.com/in/marwan-atef-dev'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Visit LinkedIn'
                                sx={{
                                    color: theme.palette.text.primary,
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                    },
                                }}>
                                <Linkedin size={22} />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        sx={{
                            display: { xs: "flex", md: "none" },
                            color: theme.palette.text.primary,
                        }}
                        onClick={toggleDrawer}
                        aria-label='Toggle navigation'>
                        {mobileOpen ? <X /> : <Menu />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor='right'
                open={mobileOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        width: "70%",
                    },
                }}>
                <List role='menu'>
                    {navLinks.map((text) => (
                        <ListItem
                            key={text}
                            onClick={toggleDrawer}
                            component='a'
                            href={`#${text.toLowerCase()}`}
                            sx={{
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                },
                                textAlign: "center",
                            }}
                            role='menuitem'>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}

                    {/* Social Links in Drawer */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 3,
                            mt: 2,
                        }}>
                        <IconButton
                            onClick={toggleTheme}
                            aria-label={`Switch to ${
                                mode === "dark" ? "light" : "dark"
                            } mode`}
                            sx={{
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                },
                            }}>
                            {mode === "dark" ? (
                                <Sun size={24} />
                            ) : (
                                <Moon size={24} />
                            )}
                        </IconButton>
                        <IconButton
                            href='https://github.com/Marwanatef96'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Visit GitHub'
                            sx={{
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                },
                            }}>
                            <Github size={24} />
                        </IconButton>
                        <IconButton
                            href='https://linkedin.com/in/marwan-atef-dev'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='Visit LinkedIn'
                            sx={{
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                },
                            }}>
                            <Linkedin size={24} />
                        </IconButton>
                    </Box>
                </List>
            </Drawer>
        </Box>
    );
}
