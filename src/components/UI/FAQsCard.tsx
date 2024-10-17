import React from 'react';
import { Box , Typography } from "@mui/material";

interface FAQsCardProps{
    question: string,
    answer : string
}

const FAQsCard:React.FC<FAQsCardProps> = ({question,answer}) => {
    return (
        <Box sx={{ mb: "24px" }}>
            <Typography variant="h6" sx={{
                fontSize: {
                    xs: "20px",
                    sm: "22px",
                    md: "25.6px",
                },
                my: "32px",
                fontWeight: 400,
                fontFamily: "'Abel'",
            }}>
                {question}
            </Typography>
            <Typography variant="body1" sx={{
                fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                },
                fontWeight: 300,
            }}>
                {answer}
            </Typography>
        </Box>
  )
}

export default FAQsCard