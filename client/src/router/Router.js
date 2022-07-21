import { Route, Routes } from "react-router-dom";

import FirstPage from "../pages/FirstPage";
import UserRouter from "./UserRouter";
import PermissionRouter from "./PermissionRouter";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<FirstPage />} />
      <Route exact path="/*" element={<UserRouter />} />
      <Route exact path="permission/*" element={<PermissionRouter />} />
    </Routes>
  );
}
