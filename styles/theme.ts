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
});

export default theme;
