import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @ Description    Register a new user
// @ Route          POST / api / users
// @ Access         Public

export const registerUser = asyncHandler(async (req, res, next) => {
  const { email, phoneNumber, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exis");
  }
  const user = await User.create({ email, phoneNumber, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});
