import { getRepository } from "typeorm";
import { HostelData } from "../dto/HostelData"; 
import { HostelCredential } from "../database/entity/Hostel.entity";
import { InsertResult } from "typeorm/browser";

// Create Hostel
export const createHostel = async (
  data: HostelData
): Promise<InsertResult> => {
  const hostel =  await HostelCredential.createQueryBuilder().insert().into(HostelCredential).values([data]).execute();
  
  return hostel;
};


// Get Hostel
export const getHostel = async (): Promise<HostelCredential[]> => {
  const hostelRepository = getRepository(HostelCredential);
  return await hostelRepository.find({ relations: ["location"] }); // Fetch all hostels with their location
};


// Update Hostel
// export const updateHostel = async (
//   data: HostelData
// ): Promise<HostelCredential | null> => {
//   const hostelRepository = getRepository(HostelCredential);

//   const hostel = await hostelRepository.findOne(data.id); // Find the hostel by ID
//   if (!hostel) {
//     return null; // Return null if hostel not found
//   }
//   // Update hostel properties
//   hostel.hostel_name = data.hostel_name;
//   hostel.rating = data.rating;
//   hostel.user_ratings_total = data.user_ratings_total;
//   hostel.opening_hours = data.opening_hours;

//   await hostelRepository.save(hostel); // Save the updated hostel

//   return hostel;
// };

export const updateHostel=async(HostelData :any)=>{
    return "this is test "
}