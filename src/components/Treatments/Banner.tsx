import React from 'react';
import PrimaryBanner from "../UI/PrimaryBanner";
import { Box } from "@mui/material";

const Banner: React.FC = () => {
    return (
        <Box sx={{ my: "20px" }}>
            <PrimaryBanner
                img="https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1599381313047-88G9ONSM1DBX7EV412JI/DSC04047.JPG?format=2500w"
                primaryContent="Find out more."
                bannerHeight={310}
                fontsize={92}
                fontweight={700}
                textTransform="none"
                alignItems={"end"}
                width='65%'
                btn={true}
            />
        </Box>)
}

export default Banner
