import React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Review: React.FC = () => {
  return (
    <Box sx={{ py: { xs: "28px", md: "50px", lg: "125px" } }}>
      <Stack
        margin="auto"
        width={{ xs: "90%", sm: "80%", md: "70%" }}
        alignItems="center"
        spacing={3}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          ★★★★★
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Abel", sans-serif',
            fontSize: { xs: "24px", md: "38px", lg: "48px" },
            fontWeight: 400,
            textAlign: "center",
            padding: { xs: "10px", md: "10px", lg: "17px" },
          }}
        >
          Skin Studio UK provides expert, high-grade and polished treatments to
          our clients throughout Surrey and South London.
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Abel", sans-serif',
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 100,
            textAlign: "center",
            padding: { xs: "10px 0", md: "17px 0" },
          }}
        >
          Our skin clinic in Surrey, is situated to look out over captivating,
          open fields with an ambient and relaxing atmosphere. Our private
          sanctuary allows you to escape from the daily stresses of life while
          receiving one of our bespoke skin treatments.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Review;
