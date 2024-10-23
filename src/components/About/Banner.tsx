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

const About: React.FC = () => {
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
                        justifyContent: "center",
                    }}
                >
                    <CardMedia
                        component="img"
                        image={
                            "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1599248063101-KU1K7IHWV3WRB6MZT0LY/DSC03683.JPG"
                        }
                        alt="img"
                        loading="lazy"
                        sx={{
                            width: { xs: "282px", md: "456px", lg: "545px" },
                            height: { xs: "auto", md: "262pxpx", lg: "362px" },
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
                        The Studio.
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
                        Situated to look out over captivating, open fields - we aim to create an ambient atmosphere - to allow you to escape from the daily stresses of life. The studio is a neutral, warm, white space which emphasises the highest levels of sanitary we are committed to.
                    </Typography>
                </Item>

            </Stack>
        </Box>

    )
}

export default About