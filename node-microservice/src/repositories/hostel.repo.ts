import { InsertResult } from 'typeorm';
import { expressLogger } from '..';
import { IHostelCredential } from '../controller/hostel.controller';
import { HostelCredential } from '../database/entity/Hostel.entity';
import { DatabaseException } from '../exceptions';
import { HostelLocation } from '../database/entity/HotelLocation';

class HostelRepo {
  static storeHostel = async (
    hostelData: Partial<IHostelCredential>
  ): Promise<HostelCredential> => {
    try {
      const insertData = HostelCredential.create(hostelData);

      const datainserted = await insertData.save();
      expressLogger.info('Hostel Saved');
      return datainserted;
    } catch (err) {
      throw new DatabaseException(null, 'Database Exception Error');
    }
  };
  static storeAddress = async (
    lat: number | undefined,
    lng: number | undefined
  ) => {
    try {
      const savedLocation = HostelLocation.create({
        lat: lat,
        lng: lng,
      });

      const savedData = await savedLocation.save();
      return savedData;
    } catch (err) {
      throw new DatabaseException(null, 'Error in Storing Address Of Hostel');
    }
  };
}

export default HostelRepo;
