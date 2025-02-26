import { Request, Response, NextFunction } from "express";
import OfficeRental from "../models/OfficeRental";
import { ObjectId } from "mongodb";
// Create a new rental request
export const createRental = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { _id, name, email, officeSize, comments } = req.body;

  try {
    const rental = new OfficeRental({ _id: new ObjectId(_id), name, email, officeSize, comments });
    await rental.save();

    res.status(201).json({ message: "Rental request submitted successfully", rental: rental });
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
  req: Request<{ _id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { _id } = req.params;
  const { status } = req.body;

  try {
    console.log(_id);
    const rental = await OfficeRental.findOne({ _id: new ObjectId(_id) });

    console.log(rental);

    rental.status = status;
    console.log(rental);
    await rental.save();

    res.status(200).json({ message: "Rental status updated successfully" });
  } catch (error) {
    next(error); // Pass unexpected errors to the centralized error handler
  }
};

export const deleteRental = async (
  req: Request<{ _id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { _id } = req.params;

  try {
    const rental = await OfficeRental.findOneAndDelete({ _id: new ObjectId(_id) });

    if (!rental) {
      res.status(404).json({ message: "Rental not found" });
      return;
    }

    res.status(200).json({ message: "Rental deleted successfully" });
  } catch (error) {
    next(error); // Pass unexpected errors to the centralized error handler
  }
};
