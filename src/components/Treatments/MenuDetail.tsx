import React from 'react';
import { Box, Typography } from "@mui/material";
import PrimaryMenuCard from "../UI/PrimaryMenuCard";
import Grid from '@mui/material/Grid2';


interface TreatmentData {
    name: string;
    price: string;
    coursePrice?: string;
    description: string;
    duration: string;
    learnMoreLink: string;
}

interface MenuDetailProps {
    content: string,
    menuData: TreatmentData[]
}

const MenuDetail: React.FC<MenuDetailProps> = ({ content, menuData }) => {
    return (
        <Box sx={{
            width: "87%",
            m: "auto",
            pb: { xs: "10px", md: "110px" }
        }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textTransform: "uppercase",
                    fontFamily: '"Abel", sans-serif',
                    fontWeight: 700,
                    lineHeight: "34.9798px",
                    fontSize: "25.6px",
                    pb: "55px"
                }}
            >
                {content}
            </Typography>

            <Grid container spacing={2} rowSpacing={16} >
                {menuData.map((element) => (
                    <Grid size={{ xs: 12, md: 4 }} >
                        <PrimaryMenuCard name={element.name} price={element.price} coursePrice={element.coursePrice} description={element.description} duration={element.duration} learnMoreLink={element.learnMoreLink} />
                    </Grid>
                ))}
            </Grid>



        </Box>
    )
}

export default MenuDetail;
