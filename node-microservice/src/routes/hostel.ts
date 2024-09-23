import { NextFunction, Request, Response } from 'express';
import { DatabaseException } from '../exceptions';
import HostelService from '../services/hostel.service';

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

export const registerHostel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: Partial<RegisterHostelDto> = req.body;
    const resposne = await HostelService.registerHotel(data);
    return res.status(201).json({
      message: 'Register Hotel',
      data: resposne,
    });
  } catch (err) {
    if (err instanceof DatabaseException) {
      next(err);
    }
    next(err);
  }
};
