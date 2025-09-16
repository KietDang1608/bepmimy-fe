import { Box, Typography } from "@mui/material";

export default function FloatingImageButton() {
  return (
    <Box
      component="a"
      href="https://www.facebook.com/Mydang2211"
      sx={{
        display: "flex",              // để chữ và hình nằm ngang
        alignItems: "center",         // canh giữa theo chiều dọc
        
        position: "fixed",
        top: "15%",
        right: "2%",
        zIndex: 1500,
        cursor: "pointer",
        "&:hover img": {
          transform: "scale(1.2) rotate(10deg)",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.4)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "0.75rem",
          backgroundColor: "#f0e6dc",
          padding: "4px 6px",
          borderRadius: "4px",
          color: "black",
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: "bold",
          mr:-1,
          pr:1,
        }}
      >
        Ghé FB My Đặng nha!!
      </Typography>

      <Box
        component="img"
        src="/fb.webp"
        alt="Back to top"
        sx={{
          width: 50,
          height: 50,
          objectFit: "cover",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          animation: "pulse 1.5s infinite",
          "@keyframes pulse": {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.1)" },
            "100%": { transform: "scale(1)" },
          },
        }}
      />
    </Box>
  );
}
