// components/common/Footer.tsx
"use client";

import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f5f2",
        borderTop: "1px solid #eee",
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo + Description */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                mb: 2,
              }}
            >
              BẾP MỊ MY
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Những khoảnh khắc ngọt ngào được làm mới mỗi ngày. 
              
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Thưởng thức bánh kem, bánh mì và bánh ngọt thơm ngon được làm bằng cả tình yêu.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 600,
              mb: 2,
              }}
            >
              LIÊN KẾT NHANH
            </Typography>
            {["TRANG CHỦ", "GIỚI THIỆU", "MENU", "THƯ VIỆN", "LIÊN HỆ"].map((item) => (
              <Typography key={item} variant="body2" sx={{ mb: 1, display: "flex", alignItems: "center" }}>
              <ArrowRightIcon sx={{ fontSize: 18, mr: 1 }} />
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                underline="hover"
                color="inherit"
              >
                {item}
              </Link>
              </Typography>
            ))}
            
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 600,
                mb: 2,
              }}
            >
              LIÊN HỆ
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📍 285 Đinh Bộ Lĩnh, Lagi, Lâm Đồng
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📧 hello@mybakery.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              📞 +84 36 328 5037
            </Typography>

            {/* Social Icons */}
            <Box>
              <IconButton href="#" size="small" sx={{ color: "black" }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" size="small" sx={{ color: "black" }}>
                <img src="/zl.webp" alt="" width={24} />
              </IconButton>
              
            </Box>
          </Grid>
        </Grid>

        {/* Bottom copyright */}
        <Box textAlign="center" mt={5}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} BEP MI MY. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
