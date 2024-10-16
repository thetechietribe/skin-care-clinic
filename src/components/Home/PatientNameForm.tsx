import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PrimaryInputField from "../UI/PrimaryInputField";
import PrimaryButton from "../UI/PrimaryButton";

const PatientNameForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted Name:", name);
        console.log("Submitted Email:");
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 3,
                maxWidth: "90%",
                margin: "auto",
                boxShadow: "none",
                pb: "110px",
                fontFamily: "primaryFont , Abel",
            }}
        >
            <Typography variant="h6" gutterBottom sx={{
                fontSize: "15px",
                fontWeight: 300,
                my: "10px"
            }} >
                New Patient Name (required)
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ marginBottom: 2, display: "flex", gap: 2 }}>
                    <PrimaryInputField labelContent="First Name" />
                    <PrimaryInputField labelContent="Last Name" />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <PrimaryInputField labelContent="Email(required)" />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <PrimaryInputField labelContent="Phone(required)" />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <PrimaryInputField labelContent="Treatment of interest(required)" />
                </Box>
                <Typography variant="h6" gutterBottom sx={{
                    fontSize: "15px",
                    fontWeight: 300,
                    my: "10px"
                }} >
                    Referring Friends Name (required)
                </Typography>
                <Box sx={{ marginBottom: 2, display: "flex", gap: 2 }}>
                    <PrimaryInputField labelContent="First Name" />
                    <PrimaryInputField labelContent="Last Name" />
                </Box>
                <PrimaryButton content="Send" />
            </form>
        </Paper>
    );
};

export default PatientNameForm;
