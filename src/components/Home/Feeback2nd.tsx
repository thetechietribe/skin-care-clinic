import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Typography, CardMedia } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";


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

const Feedback2nd: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        m: "auto",
        py: { xs: "20px", md: "110px" }
      }}
    >
      <Stack
        spacing={2}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          px: { xs: "10px", md: "55px" },
          width: "100%",
        }}
      >
        <Item
          sx={{
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap: "34px",
            pt: "45px",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "rgb(63,63,63)",
              fontWeight: 400,
              fontSize: { xs: "20px", md: "25.6px" },
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              fontFamily: '"Abel", sans-serif',
              ":hover": { backgroundColor: "white" },
            }}
          >
            Our In-House Expert
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgb(63,63,63)",
              fontWeight: 400,
              fontSize: { xs: "32px", md: "48px" },
              fontFamily: '"Abel", sans-serif',
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              py: "15px",
              ":hover": { backgroundColor: "white" },
            }}
          >
            Meet Georgia!
          </Typography>
          <Box>
            <PrimaryButton content="Find Out More" />
          </Box>
        </Item>
        <Item
          sx={{
            boxShadow: "none",
            p: 0,
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CardMedia
            component="img"
            image={
              "https://fullcirclehome.com/cdn/shop/products/fc0376afd4e04c88996ffad255212b2a.thumbnail.0000000000_1024x.jpg?v=1663898364"
            }
            sx={{
              width: { xs: "282px", md: "456px", lg: "656px" },
              height: { xs: "422px", md: "784px", lg: "984px" },
              borderRadius: "45px",
            }}
            alt="img"
            loading="lazy"
          />
        </Item>
      </Stack>
    </Box>
  );
};

export default Feedback2nd;
