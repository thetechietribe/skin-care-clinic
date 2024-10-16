import { Box, Typography } from '@mui/material'
import React from 'react'

const FooterCard: React.FC = () => {
    return (
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h6" gutterBottom sx={{
                fontSize: "16px",
                fontFamily: '"Abel", sans-serif',
                fontWeight: 100,
                my: "10px",
                textTransform: "uppercase"
            }} >
                STUDIO LOCATION
            </Typography>
            <Typography variant="h6" gutterBottom sx={{
                fontSize: "14px",
                fontFamily: '"Abel", sans-serif',
                fontWeight: 100,
                my: "10px"
            }} >
                47 Little Woodcote Lane, Carshalton, Surrey, SM5 4BY
            </Typography>
            <Typography variant="h6" gutterBottom sx={{
                fontSize: "16px",
                fontFamily: '"Abel", sans-serif',
                fontWeight: 300,
                my: "10px"
            }} >
                Convenient to Croydon
            </Typography>
        </Box>
    )
}

export default FooterCard