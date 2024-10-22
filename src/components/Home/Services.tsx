import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ServiceCard from "../UI/ServiceCard";
import ServicesData from "../../data/ServicesData";

const Services: React.FC = () => {
  return (
    <>
      <Box sx={{ my: { xs: "10px", md: "15px", lg: "110px" } }}>
        <Typography
          variant="h3"
          color="initial"
          sx={{
            fontFamily: '"Abel", sans-serif',
            textAlign: "center",
            py: "50px",
            my: { md: "0px", lg: "40px" },
          }}
        >
          Skincare for{" "}
          <span>
            <b>all skin concerns</b>
          </span>
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
          paddingX={{ xs: "10px", md: "10px", lg: "0px" }}
        >
          <Stack
            direction={"column"}
            spacing={3}
            paddingX={{ xs: "10px", md: "0px", lg: "0px" }}
          >
            <ServiceCard
              img={ServicesData[0].img}
              title={ServicesData[0].title}
              price={ServicesData[0].price}
              about={ServicesData[0].about}
              btncontent={ServicesData[0].btncontent}
              topRightRadiusbrd={50}
            />
            <ServiceCard
              img={ServicesData[1].img}
              title={ServicesData[1].title}
              price={ServicesData[1].price}
              about={ServicesData[1].about}
              btncontent={ServicesData[1].btncontent}
              topRightRadiusbrd={50}
              bottomRightRadiusbrd={10}
            />
          </Stack>
          <Stack
            direction={"column"}
            spacing={3}
            paddingX={{ xs: "10px", md: "0" }}
          >
            <Box sx={{ pt: { xs: "0px", md: "150px" } }}>
              <ServiceCard
                img={ServicesData[2].img}
                title={ServicesData[2].title}
                price={ServicesData[2].price}
                about={ServicesData[2].about}
                btncontent={ServicesData[2].btncontent}
                topLeftRadiusbrd={50}
                bottomRightRadiusbrd={50}
              />
              <ServiceCard
                img={ServicesData[3].img}
                title={ServicesData[3].title}
                price={ServicesData[3].price}
                about={ServicesData[3].about}
                btncontent={ServicesData[3].btncontent}
                topLeftRadiusbrd={100}
                bottomRightRadiusbrd={10}
              />
            </Box>
          </Stack>
          <Stack
            direction={"column"}
            spacing={3}
            paddingX={{ xs: "10px", md: "0" }}
          >
            <ServiceCard
              img={ServicesData[4].img}
              title={ServicesData[4].title}
              price={ServicesData[4].price}
              about={ServicesData[4].about}
              btncontent={ServicesData[4].btncontent}
              topLeftRadiusbrd={100}
            />
            <ServiceCard
              img={ServicesData[5].img}
              title={ServicesData[5].title}
              price={ServicesData[5].price}
              about={ServicesData[5].about}
              btncontent={ServicesData[5].btncontent}
              topLeftRadiusbrd={100}
              bottomRightRadiusbrd={10}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Services;
