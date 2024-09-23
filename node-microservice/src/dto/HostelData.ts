export interface HostelData {
  id?: number; // Optional for create, required for update
  hostel_name: string;
  rating: number;
  user_ratings_total: string;
  opening_hours: boolean;
  location?: any; // Define this based on the HostelLocation model if needed
}
