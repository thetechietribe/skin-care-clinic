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
const Feedback: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        m: "auto",
        py: "72px",
      }}
    >
      <Stack spacing={2} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Item
          sx={{
            width: { xs: "100%", md: "50%" },
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={
              "https://fullcirclehome.com/cdn/shop/products/fc0376afd4e04c88996ffad255212b2a.thumbnail.0000000000_1024x.jpg?v=1663898364"
            }
            alt="img"
            loading="lazy"
            sx={{
              width: { xs: "282px", md: "456px", lg: "656px" },
              height: { xs: "422px", md: "784px", lg: "984px" },
            }}
          />
        </Item>

        <Item
          sx={{
            width: { xs: "100%", md: "50%" },
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: "20px", md: "78px" },
          }}
        >
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              textAlign: "start",
              color: "rgb(63,63,63)",
              fontWeight: 300,
              fontSize: { xs: 12, md: "15px" },
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              ":hover": { backgroundColor: "white" },
            }}
          >
            Amazing treatments and results! Love coming here. <br />I came
            across Skin Studio UK when looking for a local clinic to help with
            my milia, dry and tired skin and acne scaring. I couldn't have found
            a better place, Georgia is so welcoming and friendly, explaining all
            the different treatments and setting up a tailored treatment plan to
            help with the areas I needed focusing on. I noticed results after my
            first session and after a few more treatments there was such a
            difference in how clear and good my skin felt. Even managed to get
            rid of one rather large milia that I have had for years. Every
            session is a relaxing experience, along with creams to use at home,
            my skin always feels pampered. Although I have now completed my
            treatment plan, I am still continuing to visit Skin Clinic for
            further treatments and facials and would highly recommend to
            everyone.”
            <span style={{ fontWeight: "bold" }}>★★★★★</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "start",
              color: "rgb(63,63,63)",
              fontWeight: 100,
              fontSize: { xs: 12, md: 13 },
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              py: "15px",
              ":hover": { backgroundColor: "white" },
            }}
          >
            <br />— Sarah - As seen on Google Reviews
          </Typography>
        </Item>
      </Stack>
    </Box>
  );
};

export default Feedback;
