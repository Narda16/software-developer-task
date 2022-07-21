import Permission from "../models/permission.model.js";
import User from "../models/user.model.js";

const getPermissions = async (req, res, next) => {
  const permissions = await Permission.find();

  res.json({ permissions });
};

const assignPermissions = async (req, res, next) => {
  const { permissions, userId } = req.body;

  const user = await User.findById(userId);

  const permissionsId = permissions.map((perm) => perm._id);

  user.permissions = permissionsId;
  await user.save();

  res.json({ message: "Permissions Assigned" });
};

export default { getPermissions, assignPermissions };
