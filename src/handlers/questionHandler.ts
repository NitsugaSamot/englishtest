import { Request, Response, NextFunction } from 'express';

export const handleValidationError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val: any) => val.message);
    return res.status(400).json({ message: messages.join(', ') });
  }
  next(err);
};

export const handleGenericError = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
};
