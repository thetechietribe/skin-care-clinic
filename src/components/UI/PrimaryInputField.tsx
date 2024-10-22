import React, { useState } from 'react';
import { Box } from "@mui/material";

interface formDataInrFace {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    description: string,
    refFirstName?: string,
    refLastName?: string,
}
interface inputFieldProps {
    labelContent: string;
    value: string,
    field: string,
    setValue: React.Dispatch<React.SetStateAction<formDataInrFace>>
    textArea?: boolean,
}

const PrimaryInputField: React.FC<inputFieldProps> = ({ labelContent, value, field, setValue, textArea = false }) => {
    const [focus, setIsFocused] = useState<boolean>(false);

    return (
        <Box
            sx={{
                width: { xs: "100%", md: "100%" },
                display: "flex",
                flexDirection: "column",
                gap: 1,
                ":focus-visible": { outlineColor: "red" }
            }}
        >
            <label
                htmlFor="name"
                style={{
                    fontSize: "15px",
                    fontFamily: "primaryFont , Abel",
                    fontWeight: 300,
                }}
            >
                {labelContent}
            </label>
            {textArea ? (
                <textarea
                    id="name"
                    value={value}
                    onChange={
                        (e) => (
                            setValue((prevVal) => {
                                return { ...prevVal, [field]: e.target.value }
                            })
                        )}
                    style={{
                        padding: "12px",
                        width: "100%",
                        backgroundColor: "rgba(189, 189, 189, 0.1)",
                        border: "1px solid rgb(189, 189, 189)",
                        outline: `${focus ? "2px solid black" : "0px solid rgb(189, 189, 189)"}`,
                        outlineOffset: `${focus ? "2px" : "0px"}`
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    rows={5}
                />

            ) : (
                <input
                    type="text"
                    id="name"
                    value={value}
                    onChange={
                        (e) => (
                            setValue((prevVal) => {
                                return { ...prevVal, [field]: e.target.value }
                            })
                        )}
                    style={{
                        padding: "12px",
                        width: "100%",
                        backgroundColor: "rgba(189, 189, 189, 0.1)",
                        border: "1px solid rgb(189, 189, 189)",
                        outline: `${focus ? "2px solid black" : "0px solid rgb(189, 189, 189)"}`,
                        outlineOffset: `${focus ? "2px" : "0px"}`
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            )}
        </Box>
    );
}

export default PrimaryInputField;
