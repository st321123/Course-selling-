import express from "express";
import {
  login,
  register,
  update,
  logout,
  getUser,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile/:userId", getUser);
router.post("/profile/update/:userId", isAuthenticated, update);

export default router;
