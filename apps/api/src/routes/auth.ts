import type { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../lib/auth.js';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required.' });
  }

  try {
    const token = authHeader.replace('Bearer ', '');
    const payload = verifyToken(token);
    (req as any).user = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
};

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ error: 'Authentication required.' });
    }

    if (!roles.includes(user.role)) {
      return res.status(403).json({ error: 'You do not have permission to access this resource.' });
    }

    return next();
  };
};
