import React from 'react'
import { beforeAfterData } from "../../data/ImagesData";
import PrimaryImgBanner from "../UI/PrimaryImgBanner";
import { Box } from '@mui/material';

const MainComp: React.FC = () => (
    <Box sx={{ width: "87%", m: "auto", display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "space-between" } }}>
        {beforeAfterData.map((itm) => (
            <PrimaryImgBanner img={itm.img} content={itm.content} width='465px' height='350px' mt="0px" />
        ))}
    </Box>)

export default MainComp
