import {
  AppBar,
  Box,
  Toolbar,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import managementLogo from "../assets/img/management-logo.png";
import "../assets/css/navbar.css";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const firstPageNavigate = () => {
    navigate("/");
  };

  const createUserNavigate = () => {
    navigate("/create-user");
  };

  return (
    <>
      <Box>
        <AppBar position="fixed" className="navbar-appBar">
          <Toolbar className="navbar-toolbar">
            <div className="navbar-div">
              <CardMedia
                component="img"
                sx={{ width: 50, cursor: "pointer" }}
                image={managementLogo}
                alt="userManagementLogo"
                onClick={firstPageNavigate}
              />
              <Typography variant="h6" className="text">
                User Management System
              </Typography>
            </div>

            <Button
              variant="contained"
              className="button"
              onClick={createUserNavigate}
              endIcon={<AddCircleOutlineIcon />}
            >
              Add New User
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
