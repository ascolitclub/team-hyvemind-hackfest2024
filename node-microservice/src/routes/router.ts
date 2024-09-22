import { Express } from 'express';
import authRouter from './auth';

const serverRouter = (app: Express) => {
  app.use('/api', [authRouter]);
};

export default serverRouter;
