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

const Header: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "82%",
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
                        flexDirection: "column",
                        justifyContent: "center",
                        px: { xs: "20px", md: "78px" },
                        gap: "30px"
                    }}
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 400,
                            fontSize: { xs: "38px", md: "48px" },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            textTransform: "none",
                            ":hover": { backgroundColor: "white" },
                            fontFamily: "'Abel'"
                        }}
                    >
                        About.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 400,
                            fontSize: { xs: "18px", md: "25px" },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            textTransform: "none",
                            ":hover": { backgroundColor: "white" },
                            fontFamily: "'Abel'"
                        }}
                    >
                        Georgia Brown
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 100,
                            fontSize: { xs: "13px", md: "16px" },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            textTransform: "none",
                            ":hover": { backgroundColor: "white" },
                        }}
                    >
                        The Skin Clinic was created by Georgia Brown. A qualified level 4 aesthetician, with over 8 years experience in the beauty and aesthetics industry. Her love for skin science began initially when employed at the award winning, globally acclaimed Harley Street Skin Clinic. Here she thrived off witnessing the incredible results you can achieve by using the correct skincare and advanced medical treatments. Other accolades to her name include working for the internationally accomplished clinic - LaserClinicUK - who provide expectational skin care across several countries. In addition to her invaluable experience gained working for Sk:nClinic, who are on of the current leading UK skin establishment.
                        <br />
                        <br />
                        Georgia has built a reputation as an expert in her field of beauty and aesthetics. She delivers successful results and  educates her clients with expert knowledge she has gained throughout her working career.
                    </Typography>
                </Item>
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
                            width: { xs: "282px", md: "456px", lg: "545px" },
                            height: { xs: "422px", md: "784px", lg: "815px" },
                        }}
                    />
                </Item>

            </Stack>
        </Box>

    )
}

export default Header