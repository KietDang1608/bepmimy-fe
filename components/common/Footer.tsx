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
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" gap={4}>
          {/* Logo + Description */}
          <Box >
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
          </Box>
          
          {/* Contact Info */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.875rem",
                  md: "1rem",
                },
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
          </Box>
        </Box>

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
