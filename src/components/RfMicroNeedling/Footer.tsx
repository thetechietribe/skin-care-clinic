import { Box, Typography } from '@mui/material'
import React from 'react'
import PrimaryButton from "../UI/PrimaryButton";

const Footer: React.FC = () => {
    return (
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
    )
}

export default Footer