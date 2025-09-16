"use client";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import ImageBox from "./ImageBox";

const categories = {
    "BÁNH SINH NHẬT": [
        <ImageBox key="bk1" topRightText="Bánh sinh nhật" src="/bk1.jpg" width="100%" />,
        <ImageBox key="bk2" topRightText="Bánh sinh nhật" src="/bk2.jpg" width="100%" />,
        <ImageBox key="bk3" topRightText="Bánh sinh nhật" src="/bk3.jpg" width="100%" />,
        <ImageBox key="bk4" topRightText="Bánh sinh nhật" src="/bk4.jpg" width="100%" />,
    ],
    "ĂN VẶT": [
        <ImageBox key="av1" topRightText="Ăn vặt" src="/av1.jpg" width="100%" />,
        <ImageBox key="av2" topRightText="Ăn vặt" src="/av2.jpg" width="100%" />,
        <ImageBox key="av3" topRightText="Ăn vặt" src="/av3.jpg" width="100%" />,
        <ImageBox key="av4" topRightText="Ăn vặt" src="/av4.jpg" width="100%" />,
    ],
};

export default function HomeCategoryGallery() {
    const [selected, setSelected] = useState<keyof typeof categories>("BÁNH SINH NHẬT");

    return (
        <Box sx={{ textAlign: "left" }}>
            {/* Button group */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 4, mb: 2 }}>
                {Object.keys(categories).map((category) => (
                    <Button
                        key={category}
                        disableRipple
                        onClick={() => setSelected(category as keyof typeof categories)}
                        sx={{
                            background: "transparent",
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: 500,
                            borderRadius: 0,
                            textTransform: "none",
                            borderBottom:
                                selected === category ? "2px solid white" : "2px solid transparent",
                            "&:hover": {
                                background: "transparent",
                                borderBottom: "2px solid white",
                            },
                        }}
                    >
                        {category}
                    </Button>
                ))}
            </Box>

            {/* Image list */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,

                }}
            >
                {categories[selected].map((src, idx) => (
                    <Box key={idx} sx={{ flex: "1 1 calc(50% - 8px)", minWidth: "150px" }}>
                        {src}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
