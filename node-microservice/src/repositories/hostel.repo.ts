import { DEFAULT_CIPHERS } from 'tls';
import { RegisterHostelDto } from '../routes/hostel';
import Hostel from '../mongo/models/Hostel.model';
import { DatabaseException } from '../exceptions';

class HostelRepo {
  static registerHostel = async (data: Partial<RegisterHostelDto>) => {
    try {
      const newData = new Hostel({
        name: data.name,
        location: data.location,
        address: data.address,
        price: data.price,
        photos: data.photos,
      });

      const savedData = await newData.save();

      return savedData;
    } catch (err) {
      throw new DatabaseException(null, 'Error in the Database Exceptions');
    }
  };
}

export default HostelRepo;
