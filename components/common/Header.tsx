// src/components/Header.tsx
"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const navItems = ["Trang chủ", "Menu", "Thư viện", "Liên hệ"].map(item => item.toUpperCase());

export default function Header() {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: "transparent",
                color: "black",
                borderBottom: "1px solid #eee",
            }}
        >
            <Toolbar sx={{ px: 0, justifyContent: "space-between" }}>
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center", mr: "auto" }}>
                    <img src="/android-chrome-192x192.png" alt="Logo" width={80} />
                </Box>

                {/* Menu */}
                <Box sx={{ display: "flex", gap: 4 }}>
                    {navItems.map((item) => (
                        <Button
                            key={item}
                            sx={{
                                color: "black",
                                fontWeight: 500,
                                textTransform: "none",
                                fontSize: "1rem",
                                fontFamily: "Cormorant Garamond, serif",
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* CTA */}
                <Button
                    variant="contained"
                    sx={{
                        ml: 4, // tạo khoảng cách với menu
                        backgroundColor: "#d19a66",
                        borderRadius: "25px",
                        px: 3,
                        py: 1,
                        textTransform: "none",
                        fontFamily: "Playfair Display, serif",
                        "&:hover": {
                            backgroundColor: "#c6783b",
                        },
                    }}
                >
                    GIỚI THIỆU
                </Button>
            </Toolbar>
        </AppBar>

    );
}
