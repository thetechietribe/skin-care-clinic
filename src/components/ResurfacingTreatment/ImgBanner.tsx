import React from 'react'
import { resurfacingData } from "../../data/ImagesData";
import PrimaryImgBanner from "../UI/PrimaryImgBanner";
import { Box } from '@mui/material';

const ImgBanner: React.FC = () => (
    <Box sx={{ py: { sm: "0px", md: "110px" }, width: "87%", m: "auto", display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", lg: "space-between" } }}>
        {resurfacingData.map((itm) => (
            <PrimaryImgBanner img={itm.img} content={itm.content} />
        ))}
    </Box>
)

export default ImgBanner