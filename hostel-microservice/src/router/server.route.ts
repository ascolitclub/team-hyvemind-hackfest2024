import { Router } from 'express';
import hostelRouter from './hostel.route';

const serverRouter: Router = Router();

serverRouter.use('/hostel', [hostelRouter]);

export default serverRouter;
