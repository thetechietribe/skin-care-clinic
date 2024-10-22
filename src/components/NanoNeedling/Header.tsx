import React from 'react'
import { styled } from "@mui/material/styles";
import { Box, Stack, CardMedia, Typography, Paper } from '@mui/material';

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
const Header: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "87%",
                m: "auto",
                py: { xs: "15px", md: "55px" },
                position: "relative",
            }}
        >
            <Stack
                spacing={2}
                sx={{ flexDirection: { xs: "column", lg: "row", gap: 15 } }}
            >
                <Item
                    sx={{
                        width: { xs: "282px", md: "817px" },
                        height: { xs: "240px", md: "800px" },
                        boxShadow: "none",
                        display: "flex",
                        position: "relative",
                        overflow: "hidden",
                        alignItems: "center",
                        borderRadius: 0,
                        p: 0,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={
                            "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/40836814-dcb4-495e-a9eb-58f5027ba938/TRANS-DERMAL-SOLUTIONS-NANONEEDLING.png?format=2500w"
                        }
                        alt="img"
                        loading="lazy"
                        height="100%"
                        width="100%"
                    />
                    <Box sx={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.1)", top: 0, left: 0 }} >

                    </Box>
                </Item>

                <Item
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        boxShadow: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "15px",
                        p: "116px 0px 0px 16px"
                    }}
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 400,
                            fontSize: { xs: "30px", md: "38px", lg: "48px" },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            fontFamily: '"Abel", sans-serif',
                            textTransform: "none",
                            backgroundColor: "white",
                            zIndex: 5,
                            p: 2,
                            position: "absolute",
                            left: { xs: "5px", md: "33%" },
                            top: { xs: "33%", md: "25%" },
                        }}
                    >
                        Nanoneedling treatment Croydon
                    </Typography>

                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 700,
                            fontSize: { xs: 12, md: 16 },
                            textTransform: "none",
                            ":hover": { backgroundColor: "white" },
                            fontFamily: "sans-serif"
                        }}
                    >
                        What is Nandoneedling treatment, and how does it work?
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
                            m: 0,
                            ":hover": { backgroundColor: "white" },
                        }}
                    >
                        An innovative, non-invasive transdermal delivery system designed to resurface and to rejuvenate the skin for optimum results in various skin disorders.
                    </Typography>
                    {["✔Reduce any skin imperfections", "✔Improve skin quality", "✔Quick & pain-free"]?.map((element) => (
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
                                m: 0,
                                ":hover": { backgroundColor: "white" },
                            }}
                        >
                            {element}
                        </Typography>
                    ))}
                    {["From £95 per session", "No. of sessions recommended: 3-6"]?.map((element) => (
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
                                fontFamily: "sans-serif",
                                m: 0,
                            }}
                        >
                            {element}
                        </Typography>
                    ))}
                </Item>
            </Stack>

        </Box>
    )
}

export default Header;