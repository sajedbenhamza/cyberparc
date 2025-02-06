import { Request, Response, NextFunction } from "express";
import InternshipApplication from "../models/InternshipApplication";

// Create a new application
export const createApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name, email, cvLink } = req.body;

  try {
    const application = new InternshipApplication({ name, email, cvLink });
    await application.save();

    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

// Get all applications (Admin only)
export const getAllApplications = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const applications = await InternshipApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

// Update application status (Admin only)
interface AppError extends Error {
  statusCode?: number;
}

export const updateApplicationStatus = async (
  req: Request<{ id: string }>,
  res: Response,

  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const application = await InternshipApplication.findById(id);

    if (!application) {
      const error = new Error("Application not found") as AppError;
      error.statusCode = 404; // Assign statusCode
      return next(error); // Pass the error to the centralized error handler
    }

    application.status = status;
    await application.save();

    res.status(200).json({ message: "Application status updated successfully" });
  } catch (error) {
    next(error); // Pass unexpected errors to the centralized error handler
  }
};
