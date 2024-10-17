import React from "react";
import { Button } from "@mui/material";

interface buttonProps {
  content: string;
  fontsize?: number;
  btnpadding?: string;
  btnwidth?: string
}

const PrimaryButton: React.FC<buttonProps> = ({ content, fontsize = 13, btnpadding = "10px 14px", btnwidth }) => {
  return (
    <Button
      sx={{
        my: 2,
        p: btnpadding,
        fontWeight: "bolder",
        wordSpacing: 1,
        letterSpacing: 2,
        fontSize: fontsize,
        textTransform: "none",
        backgroundColor: "rgb(165, 163, 158)",
        color: "white",
        lineHeight: "normal",
        borderRadius: "0.4rem",
        ":hover": { backgroundColor: "rgb(160, 150, 140)" },
        width: btnwidth,
        fontFamily: "sans-serif"
      }}
    >
      {content}
    </Button>
  );
};

export default PrimaryButton;
