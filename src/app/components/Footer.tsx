/** @format */

"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                py: 4,
                textAlign: "center",
                backgroundColor: theme.palette.background.default,
                borderTop: `1px solid ${theme.palette.primary.main}30`,
            }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <Typography
                    variant='body2'
                    sx={{ color: theme.palette.text.secondary }}>
                    © {new Date().getFullYear()}{" "}
                    <span style={{ color: theme.palette.primary.main }}>
                        Marwan Atef
                    </span>{" "}
                    — All Rights Reserved.
                </Typography>
            </motion.div>
        </Box>
    );
}
