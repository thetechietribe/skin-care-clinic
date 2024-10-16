import React from 'react'
import { Typography, Stack } from "@mui/material";
import PrimaryButton from "../UI/PrimaryButton";



interface PrimaryMenuCardProps {
    name: string;
    price: string;
    coursePrice?: string;
    description: string;
    duration: string;
    learnMoreLink: string;
}

const PrimaryMenuCard: React.FC<PrimaryMenuCardProps> = ({ name, price, coursePrice, description, duration, learnMoreLink }) => {
    return (
        <Stack sx={{ fontFamily: "primaryFont , 'Abel'" }} gap={2} >
            <Stack spacing={2} direction="row" justifyContent="space-between" paddingRight={{ xs: "0px", md: "25px" }} >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 900,
                        fontSize: "16px",
                    }}
                >
                    {name}
                </Typography>
                <Stack spacing={2} direction={{ xs: "column", md: "row" }} alignItems="end" >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 300,
                            lineHeight: "27.2px",
                            fontSize: "16px",
                        }}
                    >
                        {price}
                    </Typography>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 300,
                            lineHeight: "27.2px",
                            fontSize: "16px",
                        }}
                    >
                        {coursePrice}
                    </Typography>
                </Stack>
            </Stack>
            <Stack spacing={2}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 300,
                        lineHeight: "24.48px",
                        fontSize: "14.4px",
                    }}
                >
                    {description}
                    <br />
                    <span>{duration}</span>

                </Typography>
            </Stack>
            <Stack spacing={2} alignItems="end" paddingRight="10px" >
                <PrimaryButton content={learnMoreLink} btnwidth="fit-content" />
            </Stack>
        </Stack>)
}

export default PrimaryMenuCard;