import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Calendar from "../ReservationCalendar/index.jsx";

export default function ActionAreaCard({ image, alt, title, description }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => handleClick()}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={alt} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ fontSize: "1.5rem" }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {open && (
        <Calendar
          commonAreaId={""}
          commonAreaName={title}
          setOpenCalendar={setOpen}
        />
      )}
    </>
  );
}
