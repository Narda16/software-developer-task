import { Card, Divider, Typography } from "@mui/material";
import "../../assets/css/cardWrapper.css";

export default function CardWrapper({ title, children }) {
  return (
    <Card className="card-wrapper">
      <Typography variant="h4" align="center" className="text">
        {title}
      </Typography>
      &nbsp;
      <Divider />
      &nbsp;
      {children}
    </Card>
  );
}
