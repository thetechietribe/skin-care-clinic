import React from 'react'
import { CardMedia, Card, Stack } from "@mui/material";

const ImageBanner: React.FC = () => {
    return (
        <Stack direction={"row"} margin="auto" width="fit-content" >
            <Stack direction={{ xs: "column", md: "row" }}>
                <CardMedia component="div">
                    <Card
                        component="img"
                        srcSet={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1598389341085-1G8EAUM9VDY4T3CF6KQP/image-asset.jpeg?format=1500w"}
                        src={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1598389341085-1G8EAUM9VDY4T3CF6KQP/image-asset.jpeg?format=1500w"}
                        alt={"img"}
                        sx={{
                            height: { xs: "140px", sm: "190px", md: "420px" },
                            boxShadow: "none", borderRadius: "0px",
                            width: { xs: "140px", sm: "190px", md: "420px" }
                        }}
                        loading="lazy">
                    </Card>
                </CardMedia>
                <CardMedia component="div">
                    <Card
                        component="img"
                        srcSet={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1598389330236-L5W69R72MGRK23VOAKXO/image-asset.jpeg?format=1500w"}
                        src={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1598389330236-L5W69R72MGRK23VOAKXO/image-asset.jpeg?format=1500w"}
                        alt={"img"}
                        sx={{
                            height: { xs: "140px", sm: "190px", md: "420px" },
                            boxShadow: "none", borderRadius: "0px",
                            width: { xs: "140px", sm: "190px", md: "420px" }
                        }}
                        loading="lazy">
                    </Card>
                </CardMedia>
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }}>
                <CardMedia component="div">
                    <Card
                        component="img"
                        srcSet={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1599381904765-EX603VW0NF0OSALWOHRH/DSC03409.JPG?format=750w"}
                        src={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1599381904765-EX603VW0NF0OSALWOHRH/DSC03409.JPG?format=750w"}
                        alt={"img"}
                        sx={{
                            height: { xs: "140px", sm: "190px", md: "420px" },
                            boxShadow: "none", borderRadius: "0px",
                            width: { xs: "140px", sm: "190px", md: "420px" }
                        }}
                        loading="lazy">
                    </Card>
                </CardMedia>
                <CardMedia component="div">
                    <Card
                        component="img"
                        srcSet={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1599382879418-AU4072HRQQKMTARIHN2U/DSC03524.jpg?format=1000w"}
                        src={"https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1599382879418-AU4072HRQQKMTARIHN2U/DSC03524.jpg?format=1000w"}
                        alt={"img"}
                        sx={{
                            height: { xs: "140px", sm: "190px", md: "420px" },
                            boxShadow: "none", borderRadius: "0px",
                            width: { xs: "140px", sm: "190px", md: "420px" }
                        }}
                        loading="lazy">
                    </Card>
                </CardMedia>
            </Stack>
        </Stack>
    )
}

export default ImageBanner;
