import { Router } from "express";
import { createRental, getAllRentals, updateRentalStatus } from "../controllers/rentalController";
import { authenticate, isAdmin } from "../middleware/auth";

const router = Router();

// Submit a rental request (Public)
router.post("/", createRental);

// Get all rental requests (Admin only)
router.get("/", authenticate, isAdmin, getAllRentals);

// Update rental status (Admin only)
router.patch("/:id", authenticate, isAdmin, updateRentalStatus);

export default router;
