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
                py: { xs: "20px", md: "55px" },
                position: "relative",
            }}
        >
            <Stack
                spacing={2}
                sx={{ flexDirection: { xs: "column-reverse", lg: "row", gap: 15, pl: "24px" } }}
            >
                <Item
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        boxShadow: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "15px",
                        p: "110px 0px 0px 36px"
                    }}
                >
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            textAlign: "start",
                            color: "rgb(63,63,63)",
                            fontWeight: 400,
                            fontSize: { xs: "30px", md: "48px" },
                            letterSpacing: 1,
                            lineHeight: "27.2px",
                            fontFamily: '"Abel", sans-serif',
                            textTransform: "none",
                            backgroundColor: "white",
                            zIndex: 5,
                            p: 2,
                            position: "absolute",
                            left: { xs: "5px", md: "1%" },
                            top: { xs: "33%", md: "14%" },
                        }}
                    >
                        Onyx 17 microneedling &radio-frequency
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
                        What is Onyx17, and how does it work?
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
                        Onyx 17 microneedling with radio-frequency is a minimally invasive, non-surgical skin rejuvenation technique that can treat a variety of skin concerns such as uneven skin tone and texture, fine lines and wrinkles, large pores, and poor facial skin laxity.
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
                            fontFamily: "sans-serif",
                            m: 0,
                            ":hover": { backgroundColor: "white" },
                        }}
                    >
                        The Onyx17 device allows you to treat:
                    </Typography>
                    <ul>
                        {[
                            "Facial Rejuvenation",
                            "Stretch Marks",
                            "Skin Plumping",
                            "Skin Tightening",
                            "Acne Scaring",
                            "Active Acne",
                            "Hair Growth"
                        ]?.map((element) => (
                            <li
                                style={{
                                    textAlign: "start",
                                    color: "rgb(63,63,63)",
                                    fontWeight: 900,
                                    fontSize: "14px",
                                    letterSpacing: 1,
                                    textTransform: "none",
                                    fontFamily: "sans-serif",
                                    margin: "5px 15px",
                                    listStylePosition: "inside"
                                }}
                            >
                                {element}
                            </li>
                        ))}
                    </ul>
                </Item>

                <Item
                    sx={{
                        width: { xs: "282px", md: "801px" },
                        height: { xs: "240px", md: "400px" },
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
                            "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/4445b8eb-f89b-412a-b5d2-a6b7aa9c4b5e/Onyx17+machine.png?format=2500w"
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
                        }}
                    ></Box>
                </Item>

            </Stack>
        </Box>
    );
};

export default ReferralCard;