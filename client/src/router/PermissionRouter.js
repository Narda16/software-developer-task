import { Route, Routes } from "react-router-dom";
import PermissionPage from "../pages/PermissionPage";

export default function PermissionRouter() {
  return (
    <Routes>
      <Route exact path="user-permission/:userId" element={<PermissionPage />} />
    </Routes>
  );
}
