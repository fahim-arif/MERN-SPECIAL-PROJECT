import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controller/userController.js";
import { protect, admin } from "../middleware/authorizationMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

export default router;
