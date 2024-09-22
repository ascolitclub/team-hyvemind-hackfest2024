import { Express } from 'express';
import authRouter from './auth';

const serverRouter = (app: Express) => {
  app.use('/user', [authRouter]);
};

export default serverRouter;
