import { Router } from "express";
import {
  createApplication,
  getAllApplications,
  updateApplicationStatus,
} from "../controllers/applicationController";
import { authenticate, isAdmin } from "../middleware/auth";

const router = Router();

// Submit an internship application (Public)
router.post("/", createApplication);

// Get all applications (Admin only)
router.get("/", authenticate, isAdmin, getAllApplications);

// Update application status (Admin only)
router.patch("/:id", authenticate, isAdmin, updateApplicationStatus);

export default router;
