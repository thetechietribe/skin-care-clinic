import React from 'react'
import { Box, Typography } from '@mui/material';

const treatments = [
    {
        name: "VITA A",
        benefits: [
            "- Superior anti-ageing treatment containing retinol",
            "- Fades hyperpigmentation and age spots",
            "- Stimulates collagen production and improves hydration"
        ]
    },
    {
        name: "VITA B3",
        benefits: [
            "- A powerful Niacinamide treatment to improve tone and texture",
            "- Strengthens skin’s natural barrier",
            "- Contains anti-inflammatory and skin brightening properties"
        ]
    },
    {
        name: "VITA C",
        benefits: [
            "- Treatment for advanced skin brightening and rejuvenation",
            "- Reduces fine lines and wrinkles and evens out skin tone",
            "- Potent antioxidant"
        ]
    },
    {
        name: "HA",
        benefits: [
            "- Nourishing skin firming treatment for ageing skin",
            "- Moisturises, hydrates and assists with wound healing",
            "- Reduces wrinkles and increases skin elasticity"
        ]
    }
];


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
                Why get Nanoneedling with Skin Studio UK?
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: 300,
                mt: "16px",
                lineHeight: { xs: "28px", md: "40px" },
                width: { xs: "100%", md: "75%" }
            }} >
                Nanoneedles are used in the protocols with our skin resurfacing solutions and powerclays™. The nanoneedling technique, together with our controlled proton release, is an innovative, non-invasive transdermal delivery system designed to resurface and to rejuvenate the skin for optimum results in various skin disorders such as:
            </Typography>
            <Box sx={{ py: "34px" }}>
                {["- Lack of tone.", "- Uneven texture.", "- Excessive pigmentation.", "- Scarring.", "- Loss of elasticity"].map((item) => (
                    <Typography variant="h1" sx={{
                        fontSize: { xs: "16px", md: "24px" },
                        fontWeight: 300,
                        mt: "16px",
                        width: { xs: "100%", md: "75%" }
                    }} >
                        {item}
                    </Typography>
                ))}
            </Box>
            <Typography variant="h1" sx={{
                fontSize: { xs: "24px", md: "48px" },
                fontWeight: 400,
                fontFamily: "'Abel'",
                mb: "32px",
                width: { xs: "100%", md: "70%" }
            }} >
                Resurfacing
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 300,
                mt: "32px",
                width: { xs: "100%", md: "75%" }
            }} >
                TRANS DERMAL SOLUTIONS AND NANONEEDLING
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 300,
                mt: "32px",
                width: { xs: "100%", md: "75%" }
            }} >
                Trans dermal solutions by pHformula are sterile solutions formulated to activate cellular metabolism, for intensive revitalization, hydration, and rejuvenation.
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 300,
                mt: "32px",
                width: { xs: "100%", md: "75%" }
            }} >
                BENEFITS:
            </Typography>
            {
                treatments.map((item) => (
                    <Box>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: "12px", md: "16px" },
                            fontWeight: 300,
                            mt: "32px",
                            width: { xs: "100%", md: "75%" }
                        }} >
                            {item.name}
                        </Typography>
                        {item.benefits.map((itm) => (
                            <Typography variant="h1" sx={{
                                fontSize: { xs: "12px", md: "16px" },
                                fontWeight: 300,
                                width: { xs: "100%", md: "75%" },
                                my: "8px"

                            }} >
                                {itm}
                            </Typography>
                        ))}
                    </Box>
                ))
            }
            <Typography variant="h1" sx={{
                fontSize: { xs: "24px", md: "48px" },
                fontWeight: 400,
                fontFamily: "'Abel'",
                mt: "32px",
                width: { xs: "100%", md: "70%" }
            }} >
                Homecare
            </Typography>
            <Typography variant="h1" sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 300,
                mt: "16px",
                width: { xs: "100%", md: "75%" }
            }} >
                Patients should use the recommended pHformula homecare products to enhance overall results and to assist with the post resurfacing healing process. Consult with your pHformula Skin Specialist to find a homecare protocol suited to your needs.
            </Typography>
        </Box>
    )
}

export default About;