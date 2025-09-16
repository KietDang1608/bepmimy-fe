// src/components/Header.tsx
"use client";

import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Trang chủ", "Menu", "Thư viện", "Liên hệ"].map((item) =>
    item.toUpperCase()
);

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{
            width: 250, p: 2, height: '100%', backgroundColor: '#f8f5f2',
            backgroundImage: 'url(/home1.jpg)', backgroundSize: 'cover',
            
        }}>
            <Typography
                variant="h6"
                sx={{
                    mb: 2, fontFamily: "Playfair Display, serif", fontWeight: 700,
                    backgroundColor: "#f0e6dc", padding: "8px", borderRadius: "4px"
                }}
            >
                BẾP MỊ MY
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem component="button" key={item} sx={{ pl: 0 , backgroundColor: "#f0e6dc", mb: 1, borderRadius: "4px"}}>
                        <ArrowRightIcon />
                        <ListItemText
                            primary={item}
                            sx={{ fontFamily: "Cormorant Garamond, serif" }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
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
                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Playfair Display, serif", fontWeight: 700,
                            pl: { xs: 3, sm: 2, md: 0 }, // 👈 thêm padding-left cho mobile
                        }}

                    >
                        BẾP MỊ MY
                    </Typography>

                    {/* Menu trên desktop */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: "black",
                                    fontWeight: 400,
                                    textTransform: "none",
                                    fontSize: {
                                        xs: "0.75rem",
                                        sm: "0.875rem",
                                        md: "1rem",
                                    },
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
                            backgroundColor: "#d19a66",
                            borderRadius: "25px",
                            textTransform: "none",
                            fontFamily: "Playfair Display, serif",
                            "&:hover": { backgroundColor: "#c6783b" },
                            fontSize: {
                                xs: "0.75rem",
                                sm: "0.875rem",
                                md: "1rem",
                            },
                            fontWeight: 600,
                            display: { xs: "none", md: "inline-flex" },
                        }}
                    >
                        GIỚI THIỆU
                    </Button>

                    {/* Nút Menu trên mobile */}
                    <IconButton
                        color="inherit"
                        sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer cho mobile */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
}
