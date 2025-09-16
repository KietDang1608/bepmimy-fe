// app/page.tsx
"use client";
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { url } from "inspector";
import { Roboto, Dancing_Script } from "next/font/google";
import ImageBox from "@/components/ui/ImageBox";
import HomeCategoryGallery from "@/components/ui/HomeCategoryGallery";
import FloatingImageButton from "@/components/ui/FloatingImageButotn";
const robotoThin = Roboto({
  weight: "100", // siêu mỏng
  subsets: ["latin"],
});
const dancingScript = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <Box sx={{
      m: 3, p: 0,
    }}>
      {/* Banner */}
      <Box
        sx={{
          position: "relative",
          py: 0,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <img
          src="/header-banner.jpg"
          alt="Banner"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            background: "rgba(0,0,0,0.4)",
            py: 20,
          }}
        >
          <Typography variant="h3" fontWeight="thin" fontFamily={"Cormorant Garamond, serif"}>
            CHÀO MỪNG BẠN ĐẾN TIỆM  BÁNH <br /><Typography variant="h2" fontWeight="bold" color="#d19a66">BẾP MỊ MY</Typography>
          </Typography>
          <Typography variant="h6" mt={2} fontFamily={"Cormorant Garamond, serif"}>
            Được làm mới mỗi ngày với tình yêu <FavoriteIcon></FavoriteIcon>
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 3 }}>
            Xem Menu
          </Button>
        </Box>
      </Box>

      {/* Section: Our Products */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center" >
          {/* Grid 1 + Grid 2 + Grid 4 ảnh nhỏ (chiếm 8 cột) */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={4}>
              {/* Cột Text 1 */}
              <Grid size={{
                xs: 12, md: 6,

              }}>
                <Typography
                  variant="h6"
                  fontWeight="light"
                  mb={2}
                  fontFamily={"Cormorant Garamond, serif"}
                  color={"#8d6e63"}
                >
                  BÁNH CỦA SỐP NÈ !!
                </Typography>
                <Box
                  sx={{
                    backgroundImage: 'url("/txt.jpg")',

                    padding: 1,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Cormorant Garamond, serif",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    TỪNG CHIẾC BÁNH ...
                  </Typography>
                </Box>
                <Typography fontFamily={"Roboto, sans-serif"} textAlign="justify" color="#555" mt={3}>
                  Những chiếc bánh ngọt được làm thủ công mỗi ngày, từ nguyên liệu tươi
                  ngon, mang đến hương vị tinh tế và ngọt ngào.
                </Typography>
              </Grid>

              {/* Cột Text 2 */}
              <Grid size={{ xs: 12, md: 6, }} alignContent={"flex-end"}>
                <Typography fontFamily={"Roboto, sans-serif"} textAlign="justify" color="#555" >
                  Từ lớp kem mềm mịn cho đến phần cốt bánh thơm lừng, tất cả đều được
                  chăm chút tỉ mỉ để mang lại trải nghiệm trọn vẹn.
                </Typography>
              </Grid>

              {/* Grid con chứa 4 ảnh nhỏ */}
              <Grid size={{ xs: 12 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, md: 3 }}>
                    <img src="/home3.jpg" alt="Cake 1" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                  </Grid>
                  <Grid size={{ xs: 6, md: 3 }}>
                    <img src="/home4.jpg" alt="Cake 2" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                  </Grid>
                  <Grid size={{ xs: 6, md: 3 }}>
                    <img src="/home5.jpg" alt="Cake 3" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                  </Grid>
                  <Grid size={{ xs: 6, md: 3 }}>
                    <img src="/home6.jpg" alt="Cake 4" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Grid 3: 2 ảnh lớn (giữ nguyên vị trí và kích thước) */}
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <img src="/home1.jpg" alt="Product 1" style={{ width: "100%", borderRadius: "10px" }} />
            <img src="/home2.jpg" alt="Product 2" style={{ width: "100%", borderRadius: "10px" }} />
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "relative",
            width: "100vw",   // chiếm toàn bộ chiều ngang màn hình
            left: "50%",      // dịch sang trái
            right: "50%",
            ml: "-50vw",      // reset padding container
            mr: "-50vw",
            mt: 10,
          }}>
          <img src="/home7.jpg" alt="" style={{
            width: "100%",
            display: "block", // bỏ khoảng trống dưới ảnh
          }} />
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              color: "white",
              fontWeight: "light",
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // tạo hiệu ứng chữ nổi
            }}
          >
            BẾP MỊ MY
          </Typography><Typography
            variant="h5"

            sx={{
              position: "absolute",
              top: "20%",
              left: "10%",
              color: "white",
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)", // tạo hiệu ứng chữ nổi
              fontFamily: "Dancing Script, cursive",
            }}
          >
            Sản phẩm nổi bật
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)", // căn giữa ngang
              width: { xs: "90%", md: "70%" }, // gọn trong ảnh
            }}
          >
            <HomeCategoryGallery />
          </Box>
        </Box>

      </Container >


      <Button sx={{
        position: "fixed",
        top: "5%",
        right: "50%",
        height: 100,
        backgroundSize: 'cover',
        ml: "-50vw",      // reset padding container
        mr: "-50vw",
      }}
      >
        
        <FloatingImageButton />
      </Button>

    </Box >
  );
}
