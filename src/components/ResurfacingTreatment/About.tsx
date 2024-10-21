import React from 'react'
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <Box sx={{
            width: "87%",
            m: "auto"
        }} >
            <Typography variant="h1" sx={{
                fontSize: { xs: "24px", md: "48px" },
                fontWeight: 400,
                fontFamily: "'Abel'",
                mb: "32px",
                width: { xs: "100%", md: "70%" }
            }} >
                Why get Resurfacing Treatment with Skin Studio UK?
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: 300,
                mt: "16px",
                lineHeight: { xs: "28px", md: "40px" },
                width: { xs: "100%", md: "75%" }
            }} >
                Our skin peels and treatments are hand-picked to give you and your skin the best results possible. It is possible to uncover the naturally glowing, healthy skin behind the weary, injured, and dead skin cells that once covered the epidermis by gently removing them. All of our peels can be enhanced with LED therapy to give your skin an extra push.
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: "16px",
                fontWeight: 300,
                mt: "16px",
                width: { xs: "100%", md: "75%" }
            }} >
                There is no such thing as a one-size-fits-all technique when it comes to skin peels. Our expert aestheticians will conduct a complete consultation during which we will analyse your skin and you will be able to address your most pressing skin concerns.
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: "16px",
                fontWeight: 300,
                mt: "16px",
                width: { xs: "100%", md: "75%" }
            }} >
                Whether you're looking to treat acne or oily skin, sun damage, or rosacea, we have a wide range of peels to ensure your skin gets the best treatment possible. We'll provide recommendations based on your skin's state and treatment strategy.
            </Typography>
        </Box>
    )
}

export default About;