import React from 'react'
import { Box, Typography } from '@mui/material';
import CareCard from "../UI/CareCard";
import { Stack } from '@mui/system';

const CareCycle: React.FC = () => {
    return (
        <Box sx={{
            width: "87%",
            m: "auto",
            py: { xs: "15px", md: "110px" },
        }}>
            <Typography variant="h2" sx={{
                fontSize: "48px",
                fontWeight: 400,
                textAlign: "center",
                fontFamily: "'Abel'"
            }}>
                Things to consider
            </Typography>
            <Stack direction={{ xs: "column", md: "row" }} sx={{ flexWrap: { md: "wrap", lg: "nowrap" } }} justifyContent={{ lg: "space-between", md: "center" }} >
                <CareCard img='https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649264978140-973ENKU0G5ILMXNVX0AT/unsplash-image-dhZtNlvNE8M.jpg?format=1000w' title='Recovery time:' duration='3-4 hours' />
                <CareCard img='https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649264978140-973ENKU0G5ILMXNVX0AT/unsplash-image-dhZtNlvNE8M.jpg?format=1000w' title='Treatment time:' duration='30-40 minutes x 3 treatments - 6 weeks apart' />
                <CareCard img='https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1649264978140-973ENKU0G5ILMXNVX0AT/unsplash-image-dhZtNlvNE8M.jpg?format=1000w' title="Results duration:" duration='Up to 5 Months' />
            </Stack>
        </Box >
    )
}

export default CareCycle