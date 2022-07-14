import axios from 'axios';
import { shuffle } from '../../utils/shuffle';
import { CityResult } from './city.types';

export const fetchRandomCities = async (): Promise<CityResult[]> => {
  const { data } = await axios.get(
    `https://api.api-ninjas.com/v1/city?country=US&limit=30`,
    {
      headers: {
        'X-Api-Key': process.env.REACT_APP_NINJA_API_KEY!,
      },
    }
  );

  return shuffle<CityResult>(data).slice(0, 18);
};
