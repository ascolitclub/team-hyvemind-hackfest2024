import { IHostelCredential } from '../controller/hostel.controller';
import { HostelCredential } from '../database/entity/Hostel.entity';
import { BadRequestException } from '../exceptions';
import HostelRepo from '../repositories/hostel.repo';

class HostelService {
  static createHostel = async (data: Partial<IHostelCredential>) => {
    const checkUniqueHostelName = await HostelCredential.find({
      where: [
        {
          hostel_name: data.hostel_name,
          hostel_phoneNumber: data.phoneNumber,
        },
      ],
    });

    if (checkUniqueHostelName) {
      throw new BadRequestException(
        null,
        'Hostel Name or Phone Number is already Registered, Please Try Another Name'
      );
    }

    const response = await HostelRepo.storeHostel(data);

    const savedHostel = {
      hostel: response.id,
      lat: data.location?.lat,
      lng: data.location?.lng,
    };

    const savedLocation = await HostelRepo.storeAddress(
      savedHostel.lat,
      savedHostel.lng
    );

    response.location = savedLocation;

    const dataRespond = await response.save();

    return dataRespond;
  };
}

export default HostelService;
