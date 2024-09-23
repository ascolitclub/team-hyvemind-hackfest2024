import { Request, Response, NextFunction } from "express";
import { HostelData } from "../dto/HostelData";
import {
  createHostel,
  getHostel,
  updateHostel,
} from "../services/hostel.service";
import { AppError } from "../utils/appError";

// Create Hostel
export const createHostelController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createHostelDto: HostelData = req.body;
    const hostel = await createHostel(createHostelDto);

    if (!hostel) {
      return next(new AppError("Failed to create hostel", 400));
    }

    res.status(201).json({
      message: "Hostel created successfully",
      data: hostel,
    });
  } catch (error) {
    next(error);
  }
};

// Get Hostel
export const getHostelController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hostel = await getHostel();

    if (!hostel) {
      return next(new AppError("Hostel not found", 404));
    }

    res.status(200).json({
      message: "Hostel details fetched successfully",
      data: hostel,
    });
  } catch (error) {
    next(error);
  }
};

// // Update Hostel
// export const updateHostelController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const updateHostelDto: HostelData = req.body;
//     const updatedHostel = await updateHostel(HostelData);

//     if (!updatedHostel) {
//       return next(new AppError("Failed to update hostel", 400));
//     }

//     res.status(200).json({
//       message: "Hostel updated successfully",
//       data: updatedHostel,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
