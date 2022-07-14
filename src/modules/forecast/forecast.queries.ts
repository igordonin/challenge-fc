import axios from 'axios';
import { CityResult } from '../cities';
import { ForecastResult } from './forecast.types';

interface OpenWeatherApiRequestParams {
  lat: number;
  lon: number;
  appid: string;
  units: string;
  exclude?: string;
}

export const fetchForecast = async (
  city: CityResult
): Promise<ForecastResult> => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY!;
  const baseUrl = process.env.REACT_APP_OPEN_WEATHER_BASE_URL!;
  const _units = 'standard';

  const params: OpenWeatherApiRequestParams = {
    lat: city.latitude,
    lon: city.longitude,
    appid: apiKey,
    units: _units,
  };

  // const urlParams = Object.keys(params).map(
  //   (key) => {
  //     const teste = getProperty(params, key);

  //     return `${key}=${params[key]}`;
  //   }
  // );

  const { data } = await axios.get(
    `${baseUrl}?lat=${city.latitude}&lon=${city.longitude}&appid=${apiKey}&units=${_units}&exclude=minutely,hourly,alerts`
  );

  return data;
};
