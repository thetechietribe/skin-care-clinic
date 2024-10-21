import React from 'react';
import { CardMedia, Card, Typography } from '@mui/material';

interface PrimaryImgBannerProps {
    img: string,
    content?: string
}

const PrimaryImgBanner: React.FC<PrimaryImgBannerProps> = ({ img, content }) => {
    return (
        <CardMedia component="div">
            <>
                <Card
                    component="img"
                    srcSet={img}
                    src={img}
                    alt={img}
                    sx={{
                        height: { xs: "340px", md: "540px" },
                        mt: "20px", boxShadow: "none", borderRadius: "0px",
                        width: { xs: "300px", sm: "420px", md: "720px" }
                    }}
                    loading="lazy">
                </Card>
                <Typography variant="h1" sx={{
                    fontSize: "14px",
                    fontWeight: 300,
                    py: "10px"
                }} >
                    {content}
                </Typography>
            </>
        </CardMedia>
    );
};

export default PrimaryImgBanner;
