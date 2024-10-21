import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FAQsCard from "../UI/FAQsCard";
import { faqsResurfacing } from "../../data/FAQsData";

const FAQs: React.FC = () => {
    return (
        <Container sx={{
            margin: "auto",
            width: {
                xs: "90%",
                sm: "80%",
                md: "70%",
                lg: "68%",
            },
            display: "flex",
            justifyContent: "center",
            py: "35px"
        }}>
            <Box sx={{ width: "730px" }} >
                <Typography variant="h4" sx={{
                    fontSize: {
                        xs: "32px",
                        sm: "36px",
                        md: "40px",
                        lg: "48px",
                    },
                    fontFamily: "'Abel'",
                    fontWeight: 400,
                    my: { xs: "0px", md: "100px" },
                }}>
                    FAQs
                </Typography>
                <Box>
                    {faqsResurfacing.map((faq) => (
                        <FAQsCard question={faq.question} answer={faq.answer} />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default FAQs;
