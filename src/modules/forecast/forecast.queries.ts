import axios from 'axios';
import { ForecastResult } from './forecast.types';

export const fetchForecast = async (
  city: string,
  country: string
): Promise<ForecastResult> => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY!;
  const baseUrl = process.env.REACT_APP_OPEN_WEATHER_BASE_URL!;

  const { data } = await axios.get(
    `${baseUrl}/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`
  );

  return data;
};
