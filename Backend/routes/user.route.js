import express from "express";
import {
  login,
  register,
  update,
  logout,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
//router.post("/profile/update", isAuthenticated.update);
router.post("/logout", logout);
// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/profile/update").post(isAuthenticated.update);

export default router;
