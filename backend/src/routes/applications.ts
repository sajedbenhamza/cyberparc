import { Router } from "express";
import {
  createApplication,
  getAllApplications,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/applicationController";
import { authenticate } from "../middleware/auth";

const router = Router();

// Submit an internship application (Public)
router.post("/", createApplication);

// Get all applications (Admin only)
router.get("/", authenticate, getAllApplications);

// Update application status (Admin only)
router.patch("/:_id", authenticate, updateApplicationStatus);
router.delete("/:_id", deleteApplication);
export default router;
