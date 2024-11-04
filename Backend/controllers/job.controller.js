import { User } from "../models/user.model.js";
import { Job } from "../models/job.model.js";

export const createJob = async (req, res) => {
  try {
    const user = await User.findById(req.id);
    if (user.role == "student") {
      return res.status(401).json({
        message: "You cannot create a job.",
        success: false,
      });
    }
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      openings,
      companyId,
    } = req.body;
    //console.log("req----->>  ", req.body);
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !openings ||
      !companyId
    ) {
      return res.status(401).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      openings,
      company: companyId,
      createdBy: req.id,
    });
    return res.status(200).json({
      message: "job created Successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      openings,
      companyId,
    } = req.body;
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !openings ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const job = await Job.findByIdAndUpdate(req.params.id, {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      openings,
      company: companyId,
      createdBy: req.id,
    });
    if (!job) {
      return res.status(400).json({
        message: "No job found.",
        success: false,
      });
    }
    return res.status(200).json({
      message: "job Details Updated Successfully.",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
