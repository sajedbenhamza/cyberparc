import { Router } from "express";
import {
  createRental,
  getAllRentals,
  updateRentalStatus,
  deleteRental,
} from "../controllers/rentalController";
import { authenticate } from "../middleware/auth";

const router = Router();

// Submit a rental request (Public)
router.post("/", createRental);
// Get all rental requests (Admin only)
router.get("/", authenticate, getAllRentals);

// Update rental status (Admin only)
router.patch("/:_id", authenticate, updateRentalStatus);
router.delete("/:_id", deleteRental);

export default router;
