import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const getUsers = async (req, res, next) => {
  const users = await User.find({
    status: "Available",
    isDeleted: false,
  });

  res.json({ users });
};

const getUser = async (req, res, next) => {
  const userId = req.params.userId;

  let user;
  try {
    user = await User.findById(userId).populate("permissions");
  } catch (err) {
    const error = "Failed getting user from database";
    res.status(400).json({ error });
    return next(error);
  }

  const message = "User successfully getted.";

  res.json({ user, message });
};

const createUser = async (req, res, next) => {
  const { firstName, lastName, username, email, password, status } = req.body;

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = "Hashing password failed";
    res.status(400).json({ error });
    return next(error);
  }

  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
    password: hashedPassword,
    status,
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = "Saving user to database failed";
    res.status(400).json({ error });
    return next(error);
  }

  const message = "You have successfully added a new user.";

  res.json({ message });
};

const updateUser = async (req, res, next) => {
  const { firstName, lastName, email, status } = req.body;
  const userId = req.params.userId;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = "Failed getting user from database";
    res.status(400).json({ error });
    return next(error);
  }

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.status = status;

  try {
    await user.save();
  } catch (err) {
    const error = "Saving user to database failed";
    res.status(400).json({ error });
    return next(error);
  }

  const message = "User edited succesfully.";

  res.json({ message });
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = "Failed getting user from database";
    res.status(400).json({ error });
    return next(error);
  }

  user.isDeleted = true;

  try {
    await user.save();
  } catch (err) {
    const error = "Saving user to database failed";
    res.status(400).json({ error });
    return next(error);
  }

  let users;
  try {
    users = await User.find({ status: "Available", isDeleted: false });
  } catch (err) {
    const error = "Failed getting users from database";
    res.status(400).json({ error });
    return next(error);
  }

  const message = "User successfully deleted.";

  res.json({ users, message });
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };
