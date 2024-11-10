import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "Job id is required.",
        success: false,
      });
    }

    const existingApplication = await Application.findOne({
      job: req.params.id,
      applicant: userId,
    });
    console.log(existingApplication);
    if (existingApplication) {
      return res.status(401).json({
        message: "You have already Applied for this job.",
        success: false,
      });
    }
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(400).json({
        message: "Job Not Found.",
        success: false,
      });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(200).json({
      message: "Job Applied Successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicantId = req.params.id;
    const application = await Application.findOne({ applicant: applicantId });
    if (!application) {
      return res.status(400).json({
        message: "Application not found.",
        success: false,
      });
    }

    if (!status) {
      return res.status(200).json({
        message: "status is requied.",
        success: false,
      });
    }

    application.status = status;
    await application.save();
    return res.status(200).json({
      message: "status updated successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
