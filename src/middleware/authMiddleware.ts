import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const userRole = req.headers['role']; // In a real application, you'd use JWT or session-based roles.
  if (userRole !== 'admin') {
    return res.status(403).json({ message: 'Forbidden, Admin role required' });
  }
  next();
};
