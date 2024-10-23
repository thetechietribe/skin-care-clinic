import React from "react";
import { Box, Typography } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";

interface primaryBannerProps {
  img: string;
  primaryContent: string;
  secondaryContent?: string;
  bannerHeight?: number;
  fontsize?: number;
  fontweight?: number;
  fontweightSecondary?: number;
  textTransform?: string;
  fontsizeSecondary?: number;
  alignItems?: string
  width?: string,
  btn?: boolean,
  btncontent?: string,
  gap?: number
}

const PrimaryBanner: React.FC<primaryBannerProps> = ({
  img,
  primaryContent,
  secondaryContent,
  bannerHeight = 420,
  fontsize = 92.8,
  fontweight = 700,
  fontweightSecondary = 700,
  textTransform = "upercase",
  fontsizeSecondary = 35,
  alignItems,
  width = "100%",
  btn = false,
  btncontent = "Get in touch",
  gap = 5
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: `${bannerHeight - 70}px`, md: `${bannerHeight}px` },
        overflow: "hidden",
      }}
    >
      <img
        src={img}
        alt="Descriptive Alt Text"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          padding: { xs: "5px", md: "10px" },
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: gap },
            width: width,
            alignItems: { xs: "center", md: alignItems },
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textTransform: textTransform,
              fontSize: { xs: "25px", md: `${fontsize}px` },
              fontWeight: fontweight,
              fontFamily: '"Abel", sans-serif',
            }}
          >
            {primaryContent}
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              textTransform: textTransform,
              fontFamily: '"Abel", sans-serif',
              fontWeight: {
                xs: fontweightSecondary - 300,
                md: fontweightSecondary,
              },
              fontSize: { xs: "25px", md: `${fontsizeSecondary}px` },
            }}
          >
            {secondaryContent}
          </Typography>
          {btn ? (
            <PrimaryButton content={btncontent} btnwidth="fit-content" />
          ) : ""}
        </Box>
      </Box>
    </Box>
  );
};

export default PrimaryBanner;
