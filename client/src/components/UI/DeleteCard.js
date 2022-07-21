import { Button, Typography, CardContent, CardMedia } from "@mui/material";
import deleteIcon from "../../assets/img/delete.png";
import "../../assets/css/deleteCard.css";

export default function DeleteCard({ submitHandler, onClose, label }) {
  return (
    <>
      <div className="delete-card-overlay-styles">
        <div className="delete-card-modal_styles">
          <CardContent className="delete-card-content">
            <CardMedia
              component="img"
              sx={{ width: 90 }}
              image={deleteIcon}
              alt="trash"
            />
          </CardContent>
          <div>
            <Typography variant="h6" className="delete-card-title">
              Are you sure you want to permanently erase {label}?
            </Typography>
            &nbsp;
            <Typography>You can't undo this action!</Typography>
          </div>
          &nbsp;
          <div className="delete-card-buttons">
            <Button
              variant="contained"
              fullWidth
              color="inherit"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              fullWidth
              className="delete-button"
              onClick={submitHandler}
            >
              Delete
            </Button>
          </div>
        </div>
        ;
      </div>
    </>
  );
}
