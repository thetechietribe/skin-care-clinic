import React from "react";
import PrimaryBanner from "../UI/PrimaryBanner";
import { Box } from "@mui/material";

const FeedbackBanner: React.FC = () => {
  return (
    <Box sx={{ my: "20px" }}>
      <PrimaryBanner
        img="https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1598386741778-TG6TEC7L5D8H3H7O1TV2/image0.jpg?format=2500w"
        primaryContent="Don’t just take our word for it!"
        secondaryContent="See what our happy patients say below"
        bannerHeight={490}
        fontsize={48}
        fontweight={400}
        textTransform="none"
        fontsizeSecondary={25}
        fontweightSecondary={100}
      />
    </Box>
  );
};

export default FeedbackBanner;
