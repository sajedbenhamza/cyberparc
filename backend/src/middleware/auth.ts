import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: string | JwtPayload;
}

// Middleware to verify JWT
export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    res.status(401).json({ message: "Authentication token missing" });
    return; // Ensure the function doesn't proceed further
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "defaultSecret");
    req.user = decoded; // Attach the decoded token to the request
    next(); // Pass control to the next middleware/handler
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Middleware to check if the user is an admin
export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (req.user && typeof req.user === "object" && req.user.role === "admin") {
    next(); // Pass control to the next middleware/handler
  } else {
    res.status(403).json({ message: "Access denied: Admins only" });
  }
};
