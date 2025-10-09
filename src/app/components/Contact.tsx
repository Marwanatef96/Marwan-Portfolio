/** @format */

"use client";

import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    useTheme,
    Link,
    Paper,
    Stack,
    IconButton,
    Alert,
    CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import {
    Mail,
    Github,
    Linkedin,
    Phone,
    MapPin,
    Twitter,
    Facebook,
} from "lucide-react";

// EmailJS configuration (use your own keys)
const EMAILJS_CONFIG = {
    serviceId: "service_mvihfuc",
    templateId: "template_x6rocz6",
    publicKey: "5e-QTBhdie-Vb_3Fo",
};

export default function Contact() {
    const theme = useTheme();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "success" as "success" | "error" | "info" | "warning",
    });

    // Contact info (from your provided code)
    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "marwanatef54@gmail.com",
            href: "mailto:marwanatef54@gmail.com",
            color: theme.palette.primary.main,
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+201148763929",
            href: "tel:+201148763929",
            color: theme.palette.success.main,
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Ismailia, Egypt",
            href: "https://www.google.com/maps/place/%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%D8%8C+%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9%E2%80%AD/@30.5981827,32.2697131,2625m/data=!3m1!1e3!4m6!3m5!1s0x14f85956191e10b9:0x3b0933775b0f5b95!8m2!3d30.5964923!4d32.2714587!16zL20vMDI5cG02?entry=ttu&g_ep=EgoyMDI1MDkyMS4wIKXMDSoASAFQAw%3D%3D",
            color: theme.palette.secondary.main,
        },
    ];

    useEffect(() => {
        // Dynamically import emailjs to avoid issues on server
        import("@emailjs/browser").then((emailjs) => {
            try {
                emailjs.init(EMAILJS_CONFIG.publicKey);
            } catch {
                // ignore init errors
            }
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = data.get("name")?.toString() || "";
        const email = data.get("email")?.toString() || "";
        const subject = data.get("subject")?.toString() || "";
        const message = data.get("message")?.toString() || "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !message) {
            setNotification({
                show: true,
                message: "Please fill all required fields.",
                type: "error",
            });
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
            return;
        }
        if (!emailRegex.test(email)) {
            setNotification({
                show: true,
                message: "Please enter a valid email address.",
                type: "error",
            });
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
            return;
        }

        setIsSubmitting(true);

        try {
            const emailjs = await import("@emailjs/browser");
            const result = await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                {
                    from_name: name,
                    from_email: email,
                    subject: subject || "New Portfolio Contact",
                    message,
                }
            );
            console.log("✅ Email sent successfully:", result);

            setNotification({
                show: true,
                message:
                    "Message sent successfully! I'll get back to you within 24 hours.",
                type: "success",
            });

            form.reset();
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
        } catch (error) {
            console.error("❌ Failed to send email:", error);
            setNotification({
                show: true,
                message:
                    "Failed to send message. Please try again or contact me directly.",
                type: "error",
            });
            setTimeout(
                () => setNotification((prev) => ({ ...prev, show: false })),
                5000
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            id='contact'
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, md: 8 },
                py: 10,
                bgcolor: theme.palette.background.default,
            }}>
            <Grid
                container
                spacing={0}
                component={Paper}
                elevation={6}
                sx={{
                    maxWidth: "1000px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backdropFilter: "blur(10px)",
                    bgcolor: `${theme.palette.background.paper}aa`,
                }}>
                {/* LEFT SIDE — FORM */}
                <Grid
                    size={{ xs: 12, md: 7 }}
                    sx={{
                        p: { xs: 4, md: 6 },
                    }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}>
                        <Typography
                            variant='h3'
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                color: theme.palette.text.primary,
                            }}>
                            Let’s Talk
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                color: theme.palette.text.secondary,
                                mb: 4,
                                fontSize: "1.1rem",
                            }}>
                            Have a project in mind or just want to say hi? Fill
                            out the form and I’ll get back to you.
                        </Typography>

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        name='name'
                                        label='Your Name'
                                        fullWidth
                                        variant='outlined'
                                        sx={{ mb: 2 }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        name='email'
                                        label='Your Email'
                                        fullWidth
                                        variant='outlined'
                                        sx={{ mb: 2 }}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                name='subject'
                                label='Subject'
                                fullWidth
                                variant='outlined'
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                name='message'
                                label='Message'
                                fullWidth
                                multiline
                                rows={5}
                                variant='outlined'
                                sx={{ mb: 3 }}
                            />

                            <Button
                                type='submit'
                                variant='contained'
                                fullWidth
                                size='large'
                                disabled={isSubmitting}
                                startIcon={
                                    isSubmitting ? (
                                        <CircularProgress
                                            size={20}
                                            color='inherit'
                                        />
                                    ) : undefined
                                }
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    fontWeight: 600,
                                    py: 1.4,
                                    boxShadow: `0 0 15px ${theme.palette.primary.main}66`,
                                    "&:hover": {
                                        backgroundColor: `${theme.palette.primary.main}cc`,
                                        boxShadow: `0 0 25px ${theme.palette.primary.main}80`,
                                    },
                                    "&:disabled": {
                                        opacity: 0.7,
                                        cursor: "not-allowed",
                                    },
                                }}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </motion.form>
                    </motion.div>
                </Grid>

                {/* RIGHT SIDE — CONTACT INFO */}
                <Grid
                    size={{ xs: 12, md: 5 }}
                    sx={{
                        backgroundColor: `${theme.palette.primary.main}10`,
                        p: { xs: 4, md: 6 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 3,
                    }}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}>
                        <Typography
                            variant='h4'
                            sx={{
                                fontWeight: 700,
                                mb: 4,
                                color: theme.palette.text.primary,
                            }}>
                            Contact Information
                        </Typography>

                        <Stack spacing={3}>
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <Link
                                        key={info.title}
                                        href={info.href}
                                        target={
                                            info.href.startsWith("http") ||
                                            info.href.startsWith("tel") ||
                                            info.href.startsWith("mailto")
                                                ? "_blank"
                                                : undefined
                                        }
                                        underline='none'
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            color: theme.palette.text.primary,
                                            "&:hover": {
                                                color: theme.palette.primary
                                                    .main,
                                            },
                                        }}>
                                        <IconButton
                                            sx={{
                                                bgcolor: `${theme.palette.background.paper}`,
                                                p: 1.5,
                                                mr: 2,
                                                transition: "0.3s",
                                                "&:hover": {
                                                    bgcolor: `${theme.palette.primary.main}22`,
                                                },
                                            }}>
                                            <Icon />
                                        </IconButton>
                                        <Box>
                                            <Typography
                                                variant='subtitle1'
                                                fontWeight={600}>
                                                {info.title}
                                            </Typography>
                                            <Typography variant='body2'>
                                                {info.value}
                                            </Typography>
                                        </Box>
                                    </Link>
                                );
                            })}

                            {/* SOCIAL — GitHub & LinkedIn */}
                            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                                <IconButton
                                    component={Link}
                                    href='https://github.com/Marwanatef96'
                                    target='_blank'
                                    aria-label='GitHub'
                                    sx={{
                                        bgcolor: `${theme.palette.background.paper}`,
                                        p: 1.2,
                                        transition: "0.3s",
                                        color: theme.palette.text.primary,
                                        "&:hover": {
                                            bgcolor: `${theme.palette.primary.main}22`,
                                        },
                                    }}>
                                    <Github />
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href='https://www.linkedin.com/in/marwan-atef-dev/'
                                    target='_blank'
                                    aria-label='LinkedIn'
                                    sx={{
                                        bgcolor: `${theme.palette.background.paper}`,
                                        p: 1.2,
                                        transition: "0.3s",
                                        color: theme.palette.text.primary,
                                        "&:hover": {
                                            bgcolor: `${theme.palette.primary.main}22`,
                                        },
                                    }}>
                                    <Linkedin />
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href='https://x.com/MarwanAtef10'
                                    target='_blank'
                                    aria-label='Twitter'
                                    sx={{
                                        bgcolor: `${theme.palette.background.paper}`,
                                        p: 1.2,
                                        transition: "0.3s",
                                        color: theme.palette.text.primary,
                                        "&:hover": {
                                            bgcolor: `${theme.palette.primary.main}22`,
                                        },
                                    }}>
                                    <Twitter />
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href='https://www.facebook.com/Marwan.Atef.3572'
                                    target='_blank'
                                    aria-label='Facebook'
                                    sx={{
                                        bgcolor: `${theme.palette.background.paper}`,
                                        p: 1.2,
                                        transition: "0.3s",
                                        color: theme.palette.text.primary,
                                        "&:hover": {
                                            bgcolor: `${theme.palette.primary.main}22`,
                                        },
                                    }}>
                                    <Facebook />
                                </IconButton>
                            </Box>
                        </Stack>
                    </motion.div>
                </Grid>
            </Grid>
            {/* Notification */}
            {notification.show && (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 32,
                        right: 32,
                        zIndex: 9999,
                        minWidth: 300,
                    }}>
                    <Alert
                        severity={notification.type}
                        onClose={() =>
                            setNotification((prev) => ({
                                ...prev,
                                show: false,
                            }))
                        }
                        sx={{
                            zIndex: 9999,
                            borderRadius: 2,
                        }}>
                        {notification.message}
                    </Alert>
                </Box>
            )}
        </Box>
    );
}
