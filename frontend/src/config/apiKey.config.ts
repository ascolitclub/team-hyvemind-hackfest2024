export const geminiApiKey = 'AIzaSyD7LdByKLLX0OGMnHo4Rxxtu-A6yjiZcOw';

import axios from 'axios';

const fetchGeminiData = async () => {
  const apiKey = geminiApiKey;

  try {
    const response = await axios.get('https://api.gemini.com/v1/endpoint', {
      headers: {
        'Content-Type': 'application/json',
        'X-GEMINI-APIKEY': apiKey,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching Gemini API:', error);
  }
};

