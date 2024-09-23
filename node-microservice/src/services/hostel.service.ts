import { add } from 'winston';
import { RegisterUserBody } from '../interface/auth.interface';
import { RegisterHostelDto } from '../routes/hostel';
import HostelRepo from '../repositories/hostel.repo';

class HostelService {
  static registerHotel = async (data: Partial<RegisterHostelDto>) => {
    const { name, location, address, price, photos } = data;

    const dataCredential = {
      name,
      location,
      address,
      price,
      photos,
    };

    const savedData = HostelRepo.registerHostel(dataCredential);

    return savedData;
  };
}

export default HostelService;
