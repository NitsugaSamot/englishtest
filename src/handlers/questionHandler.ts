import { Request, Response, NextFunction } from 'express';

// Manejo de errores de validación (por ejemplo, ValidationError de Mongoose)
export const handleValidationError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val: any) => val.message);
    return res.status(400).json({ message: messages.join(', ') });
  }
  next(err); // Pasar al siguiente manejador de errores si no es un error de validación
};

// Manejo de errores genéricos (cualquier otro tipo de error)
export const handleGenericError = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
};
