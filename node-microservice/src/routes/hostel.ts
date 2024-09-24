import { NextFunction, Request, Response, Router } from 'express';
import { BadRequestException, DatabaseException } from '../exceptions';
import { bookHostel, registerHostel } from '../controller/hostel.controller';

export interface RegisterHostelDto {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
  place_id: string;
  price: number;
  photos: [
    {
      photo_reference: string;
    }
  ];
}

const hostelRouter = Router();


hostelRouter.post('/hostel',registerHostel)
hostelRouter.post('/hostel/book', bookHostel);

export default hostelRouter;
