import "./fontStyle.css";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "primaryFont, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#dc004e",
      contrastText: "#fff",
    },
  },
});

export default theme;
