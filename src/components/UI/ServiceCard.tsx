import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import PrimaryButton from "../UI/PrimaryButton";
import { Box } from "@mui/material";

interface cardProps {
  img: string;
  title: string;
  price?: string;
  about?: string;
  btncontent: string;
  topLeftRadiusbrd?: number;
  topRightRadiusbrd?: number;
  bottomRightRadiusbrd?: number;
  bottomLeftRadiusbrd?: number;
}

const ServiceCard: React.FC<cardProps> = ({
  img,
  title,
  price,
  about,
  btncontent,
  topLeftRadiusbrd = 0,
  topRightRadiusbrd = 0,
  bottomRightRadiusbrd = 0,
  bottomLeftRadiusbrd = 0,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "465px",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Box>
        <CardMedia
          component="img"
          height="310"
          image={img}
          alt="Resurfacing Treatment"
          sx={{
            borderRadius: `${topLeftRadiusbrd}px ${topRightRadiusbrd}px ${bottomRightRadiusbrd}px ${bottomLeftRadiusbrd}px`,
          }}
        />
        <CardContent
          sx={{
            gap: "15px",
            my: 2,
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{
              fontSize: "35.2px",
              fontFamily: '"Abel", sans-serif',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>

          <Typography sx={{ fontWeight: 600 }}>{price}</Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              letterSpacing: 1,
              textAlign: "center",
              lineHeight: "25px",
              fontSize: "15px",
            }}
          >
            {about}
          </Typography>
        </CardContent>
      </Box>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <PrimaryButton content={btncontent} />
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
