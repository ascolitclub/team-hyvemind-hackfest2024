import { NextFunction, Request, Response, Router } from 'express';
import { registerUser, loginUser } from '../controller/auth.controller';
import { verifyAuthenticated } from '../middleware/auth.middleware';
import limiter from '../config/rate.limit.config';
import { getHotels } from '../helper/maps/map';
const authRouter: Router = Router();

authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

authRouter.get(
  '/hostel',
  limiter,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const lat = 27.65618;
      const lng = 85.350948;
      const radius = 9000;

      const response = await getHotels(lat, lng, radius);
      return res.status(201).json({
        response,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default authRouter;
