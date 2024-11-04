import express from "express";

import { createJob, updateJob } from "../controllers/job.controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/create", isAuthenticated, createJob);
router.post("/update/:id", isAuthenticated, updateJob);

export default router;
