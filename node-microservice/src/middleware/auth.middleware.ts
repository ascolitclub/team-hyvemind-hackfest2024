import { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from '../utils/jwt.utils';
import { userPayload } from '../interface/auth.interface';

export const verifyAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization'] ?? req.headers.authorization;

  if (!token || token.length === 0) {
    return res.status(403).json({
      message: 'User is not authenticated, Please Try Again',
    });
  }

  const authToken = token.startsWith('B') ? token.split(' ')[1] : token;

  const decodedPayload = await verifyAccessToken(authToken);

  const checkDecodedToken =
    Object.entries(decodedPayload as unknown as userPayload).length > 0;

  if (checkDecodedToken) {
    req.user = decodedPayload;
    next();
  } else {
    return res.status(403).json({
      message: 'Access Token is not valid and does not match',
    });
  }
};
