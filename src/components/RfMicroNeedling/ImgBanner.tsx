import React from 'react';
import { CardMedia, Card } from '@mui/material';

const imgsData = [
    "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/b2eb8df1-ef8d-432e-a7de-9b53780aab68/Celluma+-+Matthew.jpeg?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/b2eb8df1-ef8d-432e-a7de-9b53780aab68/Celluma+-+Matthew.jpeg?format=1000w",
]

const ImgBanner: React.FC = () => {
    return (
        <CardMedia component="div" sx={{ width: "87%", py: { sm: "0px", md: "110px" }, m: "auto", display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "space-between" } }}>
            {imgsData.map((item) => (
                <Card key={item}
                    component="img"
                    srcSet={item}
                    src={item}
                    alt={item}
                    sx={{
                        height: { xs: "340px", md: "540px" },
                        mt: "20px", boxShadow: "none", borderRadius: "0px",
                        width: { xs: "380px", sm: "100%", md: "720px" }
                    }}
                    loading="lazy">
                </Card>
            ))}
        </CardMedia>
    );
};

export default ImgBanner;
