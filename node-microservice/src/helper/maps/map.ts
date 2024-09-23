import axios from 'axios';

const GOOGLE_MAPS_API_KEY = 'AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI';

export const getHotels = async (lat: any, lng: any, radius: any) => {
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          location: `${lat},${lng}`,
          radius: radius,
          type: 'lodging',
          keyword: 'hostel',
          key: GOOGLE_MAPS_API_KEY,
        },
      }
    );
    return response.data.result;
  } catch (err) {
    throw new Error('Google Map Error');
  }
};
