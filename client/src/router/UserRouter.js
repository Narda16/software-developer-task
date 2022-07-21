import { Route, Routes } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";

export default function UserRouter() {
  return (
    <Routes>
      <Route exact path="create-user" element={<CreateUser />} />
      <Route exact path="edit-user/:userId" element={<EditUser />} />
    </Routes>
  );
}
