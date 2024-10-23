import React from 'react'
import { Box } from "@mui/material";
import PrimaryBanner from "../../components/UI/PrimaryBanner";

const ImgBanner: React.FC = () => (
    <Box sx={{ my: "20px" }}>
        <PrimaryBanner
            img="https://img.freepik.com/free-photo/black-painted-wallpaper-textured-backdrop_53876-129499.jpg"
            primaryContent="COME VISIT OUR STUDIO. WE’D LOVE TO SEE YOU!"
            bannerHeight={220}
            fontsize={48}
            fontweight={700}
            textTransform="none"
            alignItems={"end"}
            width='65%'
            btn={true}
            btncontent="Get in Touch"
            gap={0}
        />
    </Box>
)

export default ImgBanner
