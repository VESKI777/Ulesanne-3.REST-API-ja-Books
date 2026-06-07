import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export class AppError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Ошибки валидации Zod
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Ошибка валидации',
      details: err.issues.map(e => ({   
        field: e.path.join('.'),
        message: e.message
      }))
    });
  }
  
  // Наши кастомные ошибки
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message
    });
  }
  
  // Непредвиденные ошибки
  console.error('Непредвиденная ошибка:', err);
  return res.status(500).json({
    error: 'Внутренняя ошибка сервера'
  });
};

// Middleware для обработки 404
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    error: `Маршрут ${req.method} ${req.url} не найден`
  });
};