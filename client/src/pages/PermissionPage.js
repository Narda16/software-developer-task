import { Button, Checkbox, Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardWrapper from "../components/UI/CardWrapper";

import { useParams } from "react-router-dom";
import { useUserApi } from "../hooks/useUserApi";
import { usePermissionApi } from "../hooks/usePermissionApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShowMoreText from "react-show-more-text";

export default function PermissionPage() {
  const { getUser } = useUserApi();
  const { getPermissions, assignPermissions } = usePermissionApi();
  const params = useParams();
  const userId = params.userId;
  const user = useSelector((s) => s.store.user);
  const permissions = useSelector((s) => s.store.permissions);
  const [userPermissions, setUserPermissions] = useState([]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    getUser(userId);
    getPermissions();
  }, [userId]); // eslint-disable-line

  useEffect(() => {
    if (user._id === userId) setUserPermissions([...user.permissions]);
  }, [user, userId]);

  const onClickExpand = () => {
    setExpand(!expand);
  };

  const handleToggle = (value) => () => {
    const index = userPermissions.find((perm) => perm._id === value._id);
    const currentIndex = userPermissions.indexOf(index);
    const newChecked = [...userPermissions];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setUserPermissions(newChecked);
  };

  const onAddPermissionHandler = () => {
    assignPermissions({
      permissions: userPermissions,
      userId: userId,
    });
  };

  return (
    <CardWrapper title="Assign Permission Page">
      <Typography variant="h6" className="text">
        Select permissions for {user.firstName} {user.lastName}:
      </Typography>
      &nbsp;
      {permissions.map((permission, i) => (
        <div style={div} key={i}>
          <Checkbox
            checked={userPermissions.some(
              (perm) => perm._id === permission._id
            )}
            onClick={handleToggle(permission)}
          />
          <div>
            <Typography variant="subtitle1" sx={typographyText}>
              {permission.code}
            </Typography>
            &nbsp;
            <ShowMoreText
              lines={2}
              more={<ExpandMoreIcon color="primary" fontSize="large" />}
              less={<ExpandLessIcon color="primary" fontSize="large" />}
              onClick={onClickExpand}
              expanded={expand}
            >
              {permission.description}
            </ShowMoreText>
            &nbsp;
          </div>
        </div>
      ))}
      <Button
        variant="contained"
        className="button"
        onClick={onAddPermissionHandler}
        fullWidth
      >
        Add Permissions
      </Button>
    </CardWrapper>
  );
}

const div = {
  display: "flex",
  justifyContent: "ceneter",
  alignItems: "center",
  gap: "15px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
};

const typographyText = {
  fontWeight: "bold",
};
