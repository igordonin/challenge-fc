import axios from 'axios';
import { CityResult } from './city.types';

export const fetchCities = async (): Promise<CityResult[]> => {
  const { data } = await axios.get(
    `https://api.api-ninjas.com/v1/city?country=US&limit=18`,
    {
      headers: {
        'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY!,
      },
    }
  );

  return data;
};
