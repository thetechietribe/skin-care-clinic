import React from 'react'
import PrimaryLine from "../UI/PrimaryLine";
import { Box, Typography } from "@mui/material";

const SubHeader: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "82%", m: "auto" }}>
            <PrimaryLine />
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    textAlign: "start",
                    color: "rgb(63,63,63)",
                    fontWeight: 700,
                    fontSize: { xs: "17px", md: "35.2px" },
                    letterSpacing: 1,
                    lineHeight: "27.2px",
                    textTransform: "none",
                    ":hover": { backgroundColor: "white" },
                    fontFamily: "'Abel'",
                    mb: "32px"
                }}
            >
                Our Mission.
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
                sx={{
                    textAlign: "center",
                    color: "rgb(63,63,63)",
                    fontWeight: 300,
                    fontSize: { xs: "14spx", md: "24px" },
                    letterSpacing: 1,
                    lineHeight: { xs: "25px", lg: "40.8px" },
                    textTransform: "none",
                    ":hover": { backgroundColor: "white" },
                    width: "88%"
                }}
            >
                “Skin studio aims to guide our clients on their journey to improved skin. By providing bespoke treatments, in a tranquil setting, we work in cohesion with our clients, to achieve the best possible outcome. We truly believe that radiant skin does not only accomplish a beautiful person; it increases self esteem and self worth which emulates from you into your day-to-day life.”
            </Typography>
            <PrimaryLine />
        </Box>
    )
}

export default SubHeader