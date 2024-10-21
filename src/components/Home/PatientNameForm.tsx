import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import PrimaryInputField from "../UI/PrimaryInputField";
import emailService from "../../utils/emailService";
interface formDataInrFace {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    description: string,
    refFirstName: string,
    refLastName: string
}

const PatientNameForm: React.FC = () => {
    const [formData, setFormData] = useState<formDataInrFace>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
        refFirstName: "",
        refLastName: ""
    })
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted Name:", formData);
        console.log("Submitted Email:");
        const { firstName, lastName, email, phone, description, refFirstName, refLastName } = formData;
        const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
        const templateParams = formData;

        if (firstName && lastName && email && phone && description && refFirstName && refLastName) {
            try {
                await emailService(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, PUBLIC_KEY, templateParams);
            } catch (error) {
                console.error("Error --- ", error);
            }
        } else {
            alert("Please fill all fields");
        }


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
                    <PrimaryInputField labelContent="First Name" value={formData.firstName} setValue={setFormData} feild="firstName" />
                    <PrimaryInputField labelContent="Last Name" value={formData.lastName} setValue={setFormData} feild="lastName" />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <PrimaryInputField labelContent="Email(required)" value={formData.email} setValue={setFormData} feild="email" />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <PrimaryInputField labelContent="Phone(required)" value={formData.phone} setValue={setFormData} feild="phone" />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                    <PrimaryInputField labelContent="Treatment of interest(required)" value={formData.description} setValue={setFormData} feild="description" />
                </Box>
                <Typography variant="h6" gutterBottom sx={{
                    fontSize: "15px",
                    fontWeight: 300,
                    my: "10px"
                }} >
                    Referring Friends Name (required)
                </Typography>
                <Box sx={{ marginBottom: 2, display: "flex", gap: 2 }}>
                    <PrimaryInputField labelContent="First Name" value={formData.refFirstName} setValue={setFormData} feild="refFirstName" />
                    <PrimaryInputField labelContent="Last Name" value={formData.refLastName} setValue={setFormData} feild="refLastName" />
                </Box>
                <button style={{
                    margin: 2,
                    padding: "10px 14px",
                    fontWeight: "bolder",
                    wordSpacing: 1,
                    letterSpacing: 2,
                    fontSize: "13px",
                    textTransform: "none",
                    backgroundColor: "rgb(165, 163, 158)",
                    color: "white",
                    lineHeight: "normal",
                    borderRadius: "0.4rem",
                    width: "fit-content",
                    fontFamily: "sans-serif",
                    border: "0px"
                }} type="submit">Submit</button>
            </form>
        </Paper>
    );
};

export default PatientNameForm;
