import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import type { UserRole } from '@gfrn/types';

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, passwordHash: string) => {
  return bcrypt.compare(password, passwordHash);
};

export const signToken = (payload: { userId: string; email: string; role: UserRole }) => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'development_secret_123456', {
    expiresIn: '7d',
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'development_secret_123456') as {
    userId: string;
    email: string;
    role: UserRole;
  };
};
