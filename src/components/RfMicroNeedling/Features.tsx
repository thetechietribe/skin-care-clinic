import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FeaturesList from "../UI/FeaturesList";


const features = [
    "There is no need for numbing cream (unlike the other competitor devices).",
    "Includes an acne pen that delivers energy into the acne papules to kill the bacteria for good. (Not available with competitor devices).",
    "Treatment is a combination of Radio frequency and Microneedling, with additional Radio frequency on the skin level.",
    "Radio frequency (heat) can be turned off (unlike the other competitors), allowing you to tailor the treatment to the patient’s comfort levels. Further treatments can be offered using serums, which add to the treatment offering."
];


const featuresList = [
    "1 hour numbing before the treatment",
    "Still uncomfortable treatment",
    "Serums cannot be used because the heat from the needles cannot be turned down.",
    "Treatment downtime up to 2 weeks",
    "Sundries are 3 times the amount",
];

const Features: React.FC = () => {
    return (
        <Container sx={{
            margin: "auto",
            width: {
                xs: "90%",
                sm: "80%",
                md: "70%",
                lg: "68%",
            },
            py: { xs: "25px", md: "55px" }
        }}>
            <Box>
                <Typography variant="h4" sx={{
                    fontSize: {
                        xs: "32px",
                        sm: "36px",
                        md: "40px",
                        lg: "48px",
                    },
                    fontFamily: "'Abel'",
                    fontWeight: 400,
                    mb: "32px"
                }} >
                    Why Choose Onyx17?
                </Typography>
                <Typography variant="h6" sx={{
                    fontSize: {
                        xs: "18px",
                        sm: "20px",
                        md: "24px",
                    },
                    fontWeight: 300,
                    my: "16px"
                }}>
                    Key Features:-
                </Typography>
                <ul style={{
                    fontFamily: "primaryFont",
                    listStylePosition: "inside"
                }}>
                    {features.map((feature, index) => (
                        <li key={index} style={{ margin: "16px 0px" }}>
                            <span style={{ paddingLeft: "25px" }}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                <Typography variant="body1" sx={{ mt: '48px', mb: "16px" }}>
                    We recommend a minimum of 3 treatments, 6 weeks apart, and downtime for the treatment is up to 6 hours.
                </Typography>
            </Box>
            <Box sx={{
                py: "17px"
            }} >
                <Typography variant="h4" sx={{
                    fontSize: {
                        xs: "32px",
                        sm: "36px",
                        md: "40px",
                        lg: "48px",
                    },
                    fontFamily: "'Abel'",
                    fontWeight: 700,
                    mb: "32px",
                    textAlign: "center"
                }}>
                    5 Differences compared to other options
                </Typography>
                <FeaturesList title='Morpheus 8 –' features={featuresList} bold={false} />
                <FeaturesList title="Secret RF –" features={featuresList} bold={true} />
            </Box>
        </Container>
    );
};

export default Features;
