import e, { NextFunction, Request, Response } from 'express';
import { BadRequestException, DatabaseException } from '../exceptions';
import HostelService from '../services/hostel.service';
import Hostel from '../mongo/models/Hostel.model';
import User from '../mongo/models/User.model';

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
    const mockData = {
      name: 'Sunset Beach Resort',
      location: {
        latitude: 34.0207305,
        longitude: -118.6919155,
      },
      address: '123 Ocean Drive, Malibu, CA',
      place_id: 'ChIJ1Z6pSyzGwoARh0KrnbS_lZQ',
      price: 250,
      photos: [
        {
          photo_reference: 'CnRvAAAAwKXORnbS_lZQpFzRvHk8HZ2Ry',
        },
      ],
    };
    const data: Partial<any> = mockData;
    const resposne = await HostelService.registerHotel(data);
    return res.status(201).json({
      message: 'Register Hotel',
      data: resposne,
    });
  } catch (err) {
    console.log(err);
    if (err instanceof DatabaseException) {
      next(err);
    }
    next(err);
  }
};

export const bookHostel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hostelId = req.params.hostelId;
    const { userId } = req.body;

    const user = await User.findOne({ _id: userId });

    await Hostel.updateOne(
      { _id: hostelId },
      { $addToSet: { pendingUser: userId } }
    );

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          user_status: 'pending',
        },
      }
    );

    return res.status(200).json({ message: 'User Booked successfully.' });
  } catch (err) {
    throw new BadRequestException(null, 'Bad Gateway Exception');
  }
};
