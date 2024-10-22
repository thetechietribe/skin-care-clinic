import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "./UI/PrimaryButton";
import { Typography } from "@mui/material";
import "../main.css";

const pages = [
  "Home",
  "About",
  "Treatments",
  "RF MicroNeedling",
  "Resurfacing Treatment",
  "Nanoneedling",
  "Before & After",
  "Contact",
];

const pagesRoutes = [
  "/",
  "/about",
  "/treatments",
  "/rfMicroNeedling",
  "/resurfacingTreatment",
  "/nanoneedling",
  "/before&After",
  "/contact",
];

const NavBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();


  const logoUrl =
    "https://images.squarespace-cdn.com/content/v1/5eda3fbf8d12f643631d3deb/1591382258650-OHQ19RZ49U1MJSLXKFJL/logo_Photoshop_PNG.jpg?format=1500wå";

  const renderLogo = (isMobile: boolean) => (
    <img
      src={logoUrl}
      alt="logo"
      width={isMobile ? 85 : 135}
      height={isMobile ? 55 : 90}
      onClick={() => navigate('/')}
    />
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        py: "16.8px",
        px: { xs: 1, md: 1, lg: 11 },
        zIndex: 100,
      }}
    >
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {renderLogo(false)}
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            {renderLogo(true)}
          </Box>

          <Box sx={{ display: { xs: "flex", lg: "none" }, ml: "auto" }}>
            {drawerOpen ? (
              <IconButton
                size="large"
                aria-label="menu"
                onClick={() => setDrawerOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "none", lg: "flex" },
              gap: { md: 1, lg: 2 },
              fontSize: { xs: 8, md: 14, lg: 15 },
              alignItems: "center",
            }}
          >
            {pages.map((page, index) => (
              <NavLink
                to={pagesRoutes[index]}
                key={page}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  margin: "5px 10px",
                  borderBottom: isActive ? "1px solid black" : "none",
                  width: "fit-content",
                  paddingBottom: "4px",
                  color: "rgb(63,63,63)",
                  fontWeight: 100,
                  textTransform: "none",
                  ":hover": { backgroundColor: "white" },
                  fontFamily: "primaryFont , Abel"
                })}
              >
                {page}
              </NavLink>
            ))}
            <PrimaryButton content={"Book Appointment"} />
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            overflowY: "auto",
            backgroundColor: "white",
            mt: 10,
            boxShadow: "none",
          },
        }}
        BackdropProps={{
          invisible: true,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            overflowY: "auto",
          }}
        >
          {pages.map((page, index) => (
            <NavLink
              to={pagesRoutes[index]}
              key={page}
              onClick={() => setDrawerOpen(false)}
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "5px 10px",
                borderBottom: isActive ? "1px solid black" : "none",
                width: "fit-content",
              })}
            >
              <Typography
                sx={{
                  ":hover": { backgroundColor: "white" },
                  color: "black",
                  fontSize: 30,
                  fontWeight: 100,
                  textTransform: "none",
                }}
              >
                {page}
              </Typography>
            </NavLink>
          ))}
          <PrimaryButton
            content="Book Appointment"
            fontsize={18}
            btnpadding={"10px 14px"}
          />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
