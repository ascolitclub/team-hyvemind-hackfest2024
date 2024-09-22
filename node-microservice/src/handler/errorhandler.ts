import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../exceptions';
import { expressLogger } from '..';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof HttpException) {
    return res.status(error.getStatusCode()).json({
      message: error.getMessage(),
    });
  }

  expressLogger.error(`UnHandled Error Found, Error`, +error);

  return res.status(500).json({
    message: 'Un Handled Error Found',
  });
};
