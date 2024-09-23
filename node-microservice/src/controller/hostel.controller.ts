import { NextFunction, Request, Response } from 'express';
import { HostelLocation } from '../database/entity/HotelLocation';
import HostelService from '../services/hostel.service';
import { BadRequestException } from '../exceptions';

export interface IHostelCredential {
  hostel_name: string;
  opening_hours: boolean;
  phoneNumber: number;
  location: {
    lat: number;
    lng: number;
  };
}

export const createHostel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { hostel_name, location }: Partial<IHostelCredential> = req.body;

    const hostelCredential = {
      hostel_name,
      location,
    };

    const response = await HostelService.createHostel(hostelCredential);

    return res.status(201).json({
      message: 'Hostel Created Successfully',
      response: response,
    });
  } catch (err) {
    next;
  }
};

export const editHostel = async () => {
  
}
