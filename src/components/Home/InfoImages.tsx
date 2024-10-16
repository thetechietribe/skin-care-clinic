import { Card, CardMedia } from '@mui/material';
import imgsData from "../../data/InfoIImgData";

export default function StandardImageList() {
    return (
        <CardMedia component="div" sx={{ width: "87%", py: { sm: "0px", md: "110px" }, m: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {imgsData.map((item) => (
                <Card key={item.img}
                    component="img"
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    width="349px"
                    height="349px"
                    sx={{ mt: "20px", boxShadow: "none", borderRadius: "0px" }}
                    loading="lazy">
                </Card>
            ))}
        </CardMedia>
    );
}
