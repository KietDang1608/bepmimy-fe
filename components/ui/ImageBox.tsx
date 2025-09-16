import { Box, Typography } from "@mui/material";

interface ImageBoxProps {
  src: string;
  topRightText?: string;
  bottomLeftText?: string;
  height?: number | string;
  width?: number | string;
}

export default function ImageBox({
  src,
  topRightText,
  bottomLeftText,
  width = "100px",
  height = "100px",
}: ImageBoxProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      {/* Ảnh nền */}
      <Box
        component="img"
        src={src}
        alt="image-box"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Chữ góc phải trên */}
      {topRightText && (
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: "0.75rem",
          }}
        >
          {topRightText}
        </Typography>
      )}

      {/* Chữ góc trái dưới
      {bottomLeftText && (
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontSize: "0.875rem",
          }}
        >
          {bottomLeftText}
        </Typography>
      )} */}
    </Box>
  );
}
