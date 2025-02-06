import { Request, Response, NextFunction } from "express";
import OfficeRental from "../models/OfficeRental";

// Create a new rental request
export const createRental = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, email, officeSize, comments } = req.body;

  try {
    const rental = new OfficeRental({ name, email, officeSize, comments });
    await rental.save();

    res.status(201).json({ message: "Rental request submitted successfully" });
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

// Get all rental requests (Admin only)
export const getAllRentals = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const rentals = await OfficeRental.find();
    res.status(200).json(rentals);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
export interface AppError extends Error {
  statusCode?: number;
}
// Update rental status (Admin only)
export const updateRentalStatus = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const rental = await OfficeRental.findById(id);

    if (!rental) {
      const error = new Error("Rental request not found") as AppError;
      error.statusCode = 404;
      return next(error);
    }

    rental.status = status;
    await rental.save();

    res.status(200).json({ message: "Rental status updated successfully" });
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};
