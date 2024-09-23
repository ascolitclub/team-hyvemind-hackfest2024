import axios from 'axios';

export const fetchPopularHostels = async () => {
  try {
    const response = await axios.get('http://localhost:3002//hostel/popular');
    console.log(response);
  } catch (err) {}
};
