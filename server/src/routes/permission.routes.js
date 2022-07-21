import express from "express";
import permissionCtrl from "../controllers/permission.controller.js";

const router = express.Router();

router.get("/get-permissions", permissionCtrl.getPermissions);
router.post("/assign-permissions", permissionCtrl.assignPermissions);

export default router;
