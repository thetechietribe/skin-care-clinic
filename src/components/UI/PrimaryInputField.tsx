import React, { useState } from 'react';
import { Box } from "@mui/material";

interface inputFieldProps {
    labelContent: string;
}

const PrimaryInputField: React.FC<inputFieldProps> = ({ labelContent }) => {
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
            <input
                type="text"
                id="name"
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
        </Box>
    );
}

export default PrimaryInputField;
