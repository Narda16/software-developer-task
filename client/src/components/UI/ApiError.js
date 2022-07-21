import { Typography } from "@mui/material";

export default function ApiError({ message }) {
  return (
    <Typography style={{ color: "red", textAlign: "center" }}>
      {message}
    </Typography>
  );
}
