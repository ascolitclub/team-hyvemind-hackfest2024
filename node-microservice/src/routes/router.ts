import { Express } from 'express';
import authRouter from './auth';
import hostelRouter from './hostel';

const serverRouter = (app: Express) => {
  app.use('/api', [authRouter, hostelRouter]);
};

export default serverRouter;
