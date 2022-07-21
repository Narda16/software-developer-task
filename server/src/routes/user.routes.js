import express from "express";
import userCtrl from "../controllers/user.controller.js";
import userValidation from "../middleware/user.validation.js";

const router = express.Router();

router.post("/add-new-user", userValidation.createUser, userCtrl.createUser);

router.get("/get-users", userCtrl.getUsers);
router.get("/get-user/:userId", userCtrl.getUser);

router.delete("/delete-user/:userId", userCtrl.deleteUser);

router.patch(
  "/update-user/:userId",
  userValidation.updateUser,
  userCtrl.updateUser
);

export default router;
