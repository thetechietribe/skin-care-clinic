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
const ReferralCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "87%",
        m: "auto",
        pt: "110px",
        position: "relative",
      }}
    >
      <Stack
        spacing={2}
        sx={{ flexDirection: { xs: "column", md: "row", gap: 15 } }}
      >
        <Item
          sx={{
            width: { xs: "282px", sm: "482px", md: "701px", lg: "801px" },
            height: { xs: "240px", sm: "440px", md: "435px", lg: "535px" },
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
              "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/451d3d6d-b456-4e4a-a4e0-067702611cd6/20%25+off.png?format=2500w"
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
              borderRadius: "0px 100px 0px 0px",
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
              fontSize: { xs: "30px", md: "38px", lg: "48px" },
              letterSpacing: 1,
              lineHeight: "27.2px",
              fontFamily: '"Abel", sans-serif',
              textTransform: "none",
              backgroundColor: "white",
              zIndex: 5,
              p: 2,
              position: "absolute",
              left: { xs: "5px", sm: "10%", md: "20%", lg: "36%" },
              top: { xs: "33%", sm: "50%", md: "20%", lg: "36%" },
            }}
          >
            Spread the word{" "}
            <span style={{ fontWeight: "bold" }}>
              Refer your family & friends
            </span>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              textAlign: "start",
              color: "rgb(63,63,63)",
              fontWeight: 300,
              fontSize: { xs: 12, md: 16 },
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              ":hover": { backgroundColor: "white" },
            }}
          >
            We believe that the best way to attract new patients is to encourage
            referrals from our existing patients. So, if you are happy with the
            treatment and care you receive at Skin Studio we'd love you to tell
            your friends and family.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              textAlign: "start",
              color: "rgb(63,63,63)",
              fontWeight: 300,
              fontSize: { xs: 12, md: 16 },
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              ":hover": { backgroundColor: "white" },
            }}
          >
            Simply ask them to complete the form below and we'll do the rest. Be
            sure to tell the person you are referring to mention you when they
            attend for their initial appointment.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              textAlign: "start",
              color: "rgb(63,63,63)",
              fontWeight: 700,
              fontSize: { xs: 12, md: 16 },
              letterSpacing: 1,
              lineHeight: "27.2px",
              textTransform: "none",
              ":hover": { backgroundColor: "white" },
            }}
          >
            As a little thank you for referring your friend, we'll give you {" "}
            <span style={{ fontWeight: "bolder", fontFamily: "'Abel'" }}>
              <b>
                20% off towards your next treatment.
              </b>
            </span>
          </Typography>
        </Item>
      </Stack>
    </Box>
  );
};

export default ReferralCard;
