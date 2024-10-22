import React from 'react';
import PrimaryButton from "./PrimaryButton";
import { CardMedia, Card, Box, Typography } from '@mui/material';

const PrimaryBookCard: React.FC = () => {
    return (
        <Box sx={{ position: "relative" }} >
            <CardMedia
                component="div"
                sx={{
                    width: "87%",
                    py: { sm: "0px", md: "110px" },
                    m: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                <Card
                    component="img"
                    srcSet="https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649265785917-Z2RJ1MY379N95OT9MQXI/unsplash-image-18mUXUS8ksI.jpg?format=2500w"
                    src="https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649265785917-Z2RJ1MY379N95OT9MQXI/unsplash-image-18mUXUS8ksI.jpg?format=2500w"
                    alt={"item"}
                    width="1020px"
                    height="680px"
                    sx={{
                        mt: "20px",
                        boxShadow: "none",
                        borderRadius: "0px",
                        width: { xs: '100%', md: '1020px' },
                        height: 'auto'
                    }}
                    loading="lazy"
                />
            </CardMedia>
            <Box
                sx={{
                    backgroundColor: "rgb(223, 224, 225)",
                    position: "absolute",
                    p: { xs: "20px", sm: "40px 80px", md: "80px", lg: "72px" },
                    top: { xs: "30%", sm: "40%", md: "45%", lg: "33%" },
                    left: { xs: "7%", sm: "25%", md: "10%", lg: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    gap: "25px",
                    justifyContent: "center",
                    alignItems: { xs: "center", md: "start" }
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "'Abel'",
                        fontSize: { xs: "24px", md: "48px" },
                        fontWeight: 400,
                        width: { xs: "90%", md: "583px" },
                        textAlign: { xs: "center", md: "start" }
                    }}
                >
                    What are you waiting for?
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        fontWeight: 300
                    }}
                >
                    Book Now!
                </Typography>
                <PrimaryButton content='Book Appointment' />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
                mt: { xs: "210px", md: "0px" }
            }}>
                <Typography variant="h1" sx={{
                    fontFamily: "'Abel'",
                    fontWeight: 400,
                    fontSize: { xs: "25px", md: "48px" }
                }}>
                    Check out other treatments
                </Typography>
                <PrimaryButton content='Back to treatments' />
            </Box>
        </Box>
    )
}

export default PrimaryBookCard;
