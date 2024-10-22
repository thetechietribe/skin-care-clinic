import { Card, CardMedia } from '@mui/material';
import imgsData from "../../data/InfoIImgData";

export default function StandardImageList() {
    return (
        <CardMedia component="div" sx={{ width: "87%", py: { sm: "0px", md: "25px", lg: "110px" }, m: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
            {imgsData.map((item) => (
                <Card key={item.img}
                    component="img"
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    sx={{ mt: "20px", boxShadow: "none", borderRadius: "0px", width: { xs: "240px", md: "349px", lg: "349px" }, height: { xs: "auto", lg: "349px" } }}
                    loading="lazy">
                </Card>
            ))}
        </CardMedia>
    );
}
