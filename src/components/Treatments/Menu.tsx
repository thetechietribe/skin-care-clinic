import React from 'react';
import { Typography } from "@mui/material";
import MenuDetail from "./MenuDetail";
import PrimaryLine from "../UI/PrimaryLine";
import { MenuFacialsData, MenuResurfacingData, MenuBodyData } from "../../data/MenuData";

const Menu: React.FC = () => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    textTransform: "uppercase",
                    fontFamily: '"Abel", sans-serif',
                    fontWeight: 400,
                    lineHeight: "62px",
                    fontSize: "48px",
                    textAlign: "center",
                    pt: "112px",
                    pb: "20px"
                }}
            >
                TREATMENT MENU.
            </Typography>
            <PrimaryLine />
            <MenuDetail content="ADVANCED FACIALS." menuData={MenuFacialsData} />
            <PrimaryLine />
            <MenuDetail content="RESURFACING PEELS." menuData={MenuResurfacingData} />
            <PrimaryLine />
            <MenuDetail content="BODY" menuData={MenuBodyData} />
            <PrimaryLine />
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 300,
                    lineHeight: "24.48px",
                    fontSize: "14.4px",
                    pt: "20px",
                    pb: { xs: "20px", md: "110px" },
                    width: "87%",
                    m: "auto"
                }}
            >
                Free consultations and a skin sensitivity test is performed prior to any treatments. Pre & postcare is discussed. Clients should use the recommended pHformula homecare products to enhance overall results and to assist with the healing processes. PHformula homecare kits contain fundamental products to optimise overall results.
            </Typography>
        </div>
    )
}

export default Menu;
