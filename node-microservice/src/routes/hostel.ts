import { Router } from 'express';
import { fetchPopularHostels } from '../controller/hostel.controller';

const hostelRouter: Router = Router();

hostelRouter.get('/hostels', fetchPopularHostels);

export default hostelRouter;
