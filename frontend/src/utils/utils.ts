export const getHostelDetails = async (
  placeId: any,
  GOOGLE_MAPS_API_KEY: string
) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let hostelDetails;
    if (data.status === 'OK') {
      hostelDetails = data.result;
    }

    return hostelDetails;
  } catch (err) {
    throw new Error('Error in the getting hostel details');
  }
};
