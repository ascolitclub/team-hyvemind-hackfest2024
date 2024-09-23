import { NextFunction, Request, Response, Router } from 'express';
import { registerUser, loginUser } from '../controller/auth.controller';
import { verifyAuthenticated } from '../middleware/auth.middleware';
const authRouter: Router = Router();

authRouter.post('/user/register', registerUser);
authRouter.post('/user/login', loginUser);

export default authRouter;
