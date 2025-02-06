import { Request, Response, NextFunction } from "express";

// Define a proper error interface
interface AppError extends Error {
  statusCode?: number;
}

// Error handling middleware
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  if (!(err instanceof Error)) {
    err = new Error("An unknown error occurred");
  }

  const appError = err as AppError;
  const statusCode = appError.statusCode || 500;

  console.error("❌ Error:", appError.message);

  // Ensure res is properly formatted
  if (!res || typeof res.status !== "function") {
    console.error("🚨 ERROR: `res` is not a valid Express response object!");
    return;
  }

  res.status(statusCode).json({
    message: appError.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? appError.stack : undefined,
  });
};
