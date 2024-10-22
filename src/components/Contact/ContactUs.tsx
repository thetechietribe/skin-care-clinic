import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PrimaryInputField from "../UI/PrimaryInputField";
import emailService from "../../utils/emailService";
import { FacebookOutlined, Instagram } from '@mui/icons-material';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { firstName, lastName, email, phone, description } = formData;

        if (firstName && lastName && email && phone && description) {
            const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

            try {
                await emailService(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, PUBLIC_KEY, formData);
            } catch (error) {
                console.error("Error --- ", error);
            }
        } else {
            alert("Please fill all fields");
        }
    };

    return (
        <Stack direction={{ xs: "column", md: "row" }} width={{ xs: "100%", md: "72%" }} margin="auto" marginY="110px" gap={{ xs: "0px", md: "120px" }} alignItems="center">
            <Box sx={{ width: { xs: "80%", md: "70%" } }}>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "35.2px", fontWeight: 400, fontFamily: "'Abel'", my: "30px" }}>
                    We’re here to answer your enquiries.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "16px", fontWeight: 300, my: "30px" }}>
                    Please fill in your details into our form below, we will be in touch ASAP.
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "16px", fontWeight: 300, my: "30px" }}>
                    We look forward to hearing from you!
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: "15px", fontWeight: 300, my: "10px" }}>
                        Name (required)
                    </Typography>
                    <Box sx={{ marginBottom: 2, display: "flex", gap: 2 }}>
                        <PrimaryInputField labelContent="First Name" value={formData.firstName} setValue={setFormData} field="firstName" />
                        <PrimaryInputField labelContent="Last Name" value={formData.lastName} setValue={setFormData} field="lastName" />
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <PrimaryInputField labelContent="Email (required)" value={formData.email} setValue={setFormData} field="email" />
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <PrimaryInputField labelContent="Phone (required)" value={formData.phone} setValue={setFormData} field="phone" />
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <PrimaryInputField labelContent="Message (required)" value={formData.description} setValue={setFormData} field="description" textArea={true} />
                    </Box>
                    <button
                        style={{
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
                            border: "none"
                        }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </Box>
            <Box sx={{ width: { xs: "80%", md: "30%" } }} >
                <Box component="div" sx={{
                    my: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1
                }} >
                    <Typography variant="h6" gutterBottom sx={{
                        fontSize: "25px",
                        fontWeight: 400,
                        my: "10px",
                        fontFamily: "'Abel'"
                    }} >
                        Contact us.
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{
                        fontSize: "14px",
                        fontWeight: 100,
                        my: "10px"
                    }} >
                        <span style={{
                            width: "fit-content",
                            color: "gray",
                            borderBottom: "1px solid grey",
                            fontWeight: 700
                        }}>
                            info@skinstudiouk.com
                            <br />
                            <br />
                            07734 060 521
                        </span>
                    </Typography>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <span>
                            <Instagram />
                        </span>
                        <span>
                            <FacebookOutlined />
                        </span>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{
                        fontSize: "25px",
                        fontWeight: 400,
                        my: "10px",
                        fontFamily: "'Abel'"
                    }} >
                        Studio Location.
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{
                        fontSize: "14px",
                        fontWeight: 100,
                        my: "10px"
                    }} >
                        By appointment only

                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{
                        fontSize: "14px",
                        fontWeight: 100,
                        my: "10px"
                    }} >
                        47 Little Woodcote Lane, Carshalton, Surrey, SM5 4BY
                    </Typography>

                </Box>
            </Box>
        </Stack>
    );
};

export default ContactUs;
