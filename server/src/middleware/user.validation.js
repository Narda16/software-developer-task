import User from "../models/user.model.js";

const createUser = async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  let existingUsername;
  try {
    existingUsername = await User.findOne({ username });
  } catch (err) {
    const error = "Connecting do database failed";
    res.status(400).json({ error });
    return next(error);
  }

  if (existingUsername) {
    const error = "This username already exists.";
    res.status(400).json({ error });
    return next(error);
  }

  const isEmpty = Object.values(req.body).some((x) => x === null || x === "");
  if (isEmpty) {
    const error = "You need to fill all the inputs!";
    res.status(400).json({ error });
    return next(error);
  }

  const matchingPassword = password === confirmPassword;
  if (!matchingPassword) {
    const error = "Passwords don't match!";
    res.status(400).json({ error });
    return next(error);
  }

  if (password.length < 6) {
    const error = "Password must be at least 6 characters!";
    res.status(400).json({ error });
    return next(error);
  }

  if (username.length > 10) {
    const error = "Username must be max 10 characters!";
    res.status(400).json({ error });
    return next(error);
  }

  const nameRegex = /^[a-zA-Z0-9_.-]*$/;
  if (nameRegex.test(username) === false) {
    const error = "Username can only containe letters and numbers!";
    res.status(400).json({ error });
    return next(error);
  }

  const emailRegex = /.+\@.+\..+/;
  if (emailRegex.test(email) === false) {
    const error = "You have entered an invalid email address!";
    res.status(400).json({ error });
    return next(error);
  }

  let existingEmail;
  try {
    existingEmail = await User.findOne({ email });
  } catch (err) {
    const error = "Connecting do database failed";
    res.status(400).json({ error });
    return next(error);
  }

  if (existingEmail) {
    const error = "Email has been taken- please enter another email";
    res.status(400).json({ error });
    return next(error);
  }

  next();
};

const updateUser = async (req, res, next) => {
  const { email } = req.body;
  const userId = req.params.userId;

  let user = await User.findById(userId);

  let existingEmail = await User.findOne({ email });

  if (existingEmail) {
    if (user._id.toString() !== existingEmail?._id.toString()) {
      const error = "Email is already taken - please enter another email";
      res.status(400).json({ error });
      return next(error);
    }
  }

  const isEmpty = Object.values(req.body).some((x) => x === null || x === "");

  if (isEmpty) {
    const error = "The edit user is missing required information!";
    res.status(400).json({ error });
    return next(error);
  }

  next();
};

export default { createUser, updateUser };
