import { Request, Response, NextFunction } from 'express';
import { LoginUserBody, RegisterUserBody } from '../interface/auth.interface';
import AuthService from '../services/auth.service';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      email,
      username,
      password,
      phoneNumber,
    }: Partial<RegisterUserBody> = req.body;

    const userCredential = {
      email,
      username,
      password,
      phoneNumber,
    };

    const response = await AuthService.registerUser(userCredential as any);

    return res.status(201).json({
      message: 'Register Successfully',
      response,
    });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password }: Required<LoginUserBody> = req.body;

    const userCredential = {
      username,
      password,
    };

    const response = AuthService.loginUser(userCredential);

    return res.status(201).json({
      message: `User Logged In SuccessFully`,
      data: response,
    });
  } catch (err) {
    next(err);
  }
};
