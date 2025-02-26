import { Request, Response, NextFunction } from "express";
import InternshipApplication from "../models/InternshipApplication";
import { ObjectId } from "mongodb";
// Create a new application
export const createApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { _id, name, email, cvLink, status } = req.body;
  try {
    const application = new InternshipApplication({
      _id: new ObjectId(_id),
      name,
      email,
      cvLink,
      status,
    });
    await application.save();

    res
      .status(201)
      .json({ message: "Application submitted successfully", application: application });
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

export const updateApplicationStatus = async (
  req: Request<{ _id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { _id } = req.params;
  const { status } = req.body;

  try {
    console.log(_id);
    const application = await InternshipApplication.findOne({ _id: new ObjectId(_id) });

    console.log(application);

    application.status = status;
    console.log(application);
    await application.save();

    res.status(200).json({ message: "Application status updated successfully" });
  } catch (error) {
    next(error); // Pass unexpected errors to the centralized error handler
  }
};

export const deleteApplication = async (
  req: Request<{ _id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { _id } = req.params;

  try {
    const application = await InternshipApplication.findOneAndDelete({ _id: new ObjectId(_id) });

    if (!application) {
      res.status(404).json({ message: "Application not found" });
      return;
    }

    res.status(200).json({ message: "Application deleted successfully" });

    res.status(200).json({ message: "Application Deleted Successfully" });
  } catch (error) {
    next(error); // Pass unexpected errors to the centralized error handler
  }
};
