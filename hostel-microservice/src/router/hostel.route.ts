import { Request, Response, Router } from 'express';

const hostelRouter: Router = Router();

hostelRouter.get('/details', (_req: Request, res: Response) => {
  return res.status(201).json({
    message: 'Hostel Details',
  });
});

export default hostelRouter;
