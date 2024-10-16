import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { CardMedia, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

interface ReferralCardProps {
  img: string,
  title: string,
  subTitle?: string,
  content: React.ReactNode,
  brdRadius?: string,
  pt?:string
}

const ReferralCard: React.FC<ReferralCardProps> = ({ img, title, subTitle, content, brdRadius = "0px 100px 0px 0px", pt="110px" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "87%",
        m: "auto",
        pt: pt,
        position: "relative",
      }}
    >
      <Stack
        spacing={2}
        sx={{ flexDirection: { xs: "column", md: "row", gap: 15 } }}
      >
        <Item
          sx={{
            width: { xs: "282px", md: "801px" },
            height: { xs: "240px", md: "535px" },
            boxShadow: "none",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            alignItems: "center",
            p: 0,
          }}
        >
          <CardMedia
            component="img"
            image={
              img
            }
            alt="img"
            loading="lazy"
            height="100%"
            width="100%"
          />
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              backgroundColor: "rgb(56, 56, 69,0.1)",
              top: 0,
              left: 0,
              width: { xs: "100%" },
              height: { xs: "100%" },
              borderRadius: brdRadius
            }}
          ></Box>
        </Item>

        <Item
          sx={{
            width: { xs: "100%", md: "50%" },
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pt: "100px",
            gap: "15px",
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              textAlign: "start",
              color: "rgb(63,63,63)",
              fontWeight: 100,
              fontSize: { xs: "30px", md: "48px" },
              letterSpacing: 1,
              lineHeight: "27.2px",
              fontFamily: '"Abel", sans-serif',
              textTransform: "none",
              backgroundColor: "white",
              zIndex: 5,
              p: 2,
              position: "absolute",
              left: { xs: "5px", md: "36%" },
              top: { xs: "33%", md: "36%" },
            }}
          >
            {title}{" "}
            <span style={{ fontWeight: "bold" }}>
              {subTitle}
            </span>
          </Typography>
          {content}
        </Item>
      </Stack>
    </Box>
  );
};

export default ReferralCard;
