import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useUserApi } from "../hooks/useUserApi";

import DeleteCard from "../components/UI/DeleteCard";
import TableGrid from "../components/UI/TableGrid";

export default function FirstPage() {
  const { getUsers, deleteUserHandler } = useUserApi();
  const navigate = useNavigate();
  const users = useSelector((s) => s.store.users);
  const [sortModel, setSortModel] = useState([
    {
      field: "rating",
      sort: "desc",
    },
  ]);

  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line

  const deleteUserButton = () => {
    deleteUserHandler(deleteUser);
    setDeleteUser(false);
  };

  const editUserPageNavigate = (userId) => {
    navigate("/edit-user/" + userId);
  };

  const permissionPageNavigate = (userId) => {
    navigate("/permission/user-permission/" + userId);
  };

  const allUsers =
    users &&
    users.map((user) => ({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      status: user.status,
    }));

  return (
    <>
      {deleteUser && (
        <DeleteCard
          onClose={() => setDeleteUser(false)}
          label="this user"
          submitHandler={deleteUserButton}
        />
      )}
      <TableGrid
        allUsers={allUsers}
        editUserPageNavigate={editUserPageNavigate}
        setDeleteUser={setDeleteUser}
        permissionPageNavigate={permissionPageNavigate}
        sortModel={sortModel}
        setSortModel={setSortModel}
      />
    </>
  );
}
