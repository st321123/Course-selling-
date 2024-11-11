import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

router.get("/apply/:id", isAuthenticated, applyJob);
router.post("/update/:id", isAuthenticated, updateStatus);

export default router;
