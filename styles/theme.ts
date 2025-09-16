// styles/theme.ts
"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Cormorant Garamond, serif",
        fontWeightLight: 200,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
    },
    palette: {
        primary: {
            main: "#eab543", // màu vàng bakery
        },
        secondary: {
            main: "#8d6e63", // nâu nhẹ
        },
        background: {
            default: "#fff8f0",
        },

    },
    breakpoints: {
        values: {
            xs: 0,    // Mobile
            sm: 600,  // Tablet
            md: 900,  // Laptop nhỏ
            lg: 1200, // Desktop
            xl: 1536, // Desktop lớn
        },
    },
});

export default theme;
