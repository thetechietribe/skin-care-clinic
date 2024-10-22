import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FacebookOutlined, Instagram } from '@mui/icons-material';

export default function BasicGrid() {
    return (
        <Box sx={{
            width: "80%", m: "auto", my: "110px", fontFamily: "primaryFont , Abel"
        }}>
            <Grid container spacing={2} sx={{ justifyContent: "center" }} >
                <Grid size={{ xs: 12, md: 2 }}>
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "17px",
                            fontWeight: 100,
                            my: "10px",
                            textTransform: "uppercase"
                        }} >
                            STUDIO LOCATION
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "14px",
                            fontWeight: 100,
                            my: "10px"
                        }} >
                            47 Little Woodcote Lane, Carshalton, Surrey, SM5 4BY
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "16px",
                            fontWeight: 300,
                            my: "10px"
                        }} >
                            Convenient to Croydon
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "16px",
                            fontWeight: 100,
                            my: "10px",
                            textTransform: "uppercase"
                        }} >
                            CONTACT INFO.
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
                            </span> <br />
                            07734 060 521
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "16px",
                            fontWeight: 100,
                            my: "10px",
                            textTransform: "uppercase"
                        }} >
                            CONNECT WITH US ON SOCIAL
                        </Typography>
                        <Box component="div" sx={{
                            fontSize: "14px",
                            fontWeight: 100,
                            my: "10px",
                            display: "flex",
                            justifyContent: "center",
                            gap: 1
                        }} >
                            <span>
                                <Instagram />
                            </span>
                            <span>
                                <FacebookOutlined />
                            </span>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "16px",
                            fontWeight: 100,
                            my: "10px",
                            textTransform: "uppercase"
                        }} >
                            CHECK OUT OUR {" "}
                            <span style={{
                                width: "fit-content",
                                color: "gray",
                                borderBottom: "1px solid grey",
                                fontWeight: 900
                            }}>
                                <b>BLOG</b>
                            </span>
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "14px",
                            fontWeight: 100,
                            my: "10px",
                            width: "fit-content",
                            color: "gray",
                            borderBottom: "1px solid grey"
                        }} >
                            Cancellation policy
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "16px",
                            fontWeight: 100,
                            my: "10px",
                            textTransform: "uppercase"
                        }} >
                            © SKINSTUDIO 2022
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{
                            fontSize: "14px",
                            fontWeight: 100,
                            my: "10px",
                            color: "gray",
                            width: "fit-content",
                            borderBottom: "1px solid grey"
                        }} >
                            Website Marketing by ThinkGrow
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}



