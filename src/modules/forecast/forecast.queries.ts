import axios from 'axios';
import { CityResult } from '../cities';
import { MeasurementSystemSettings } from '../settings';
import { ForecastResult } from './forecast.types';

type OpenWeatherApiRequestParams = {
  [key: string]: any;
};

const createUrlParams = (
  city: CityResult,
  measurementSystem: MeasurementSystemSettings
) => {
  const appid = process.env.REACT_APP_OPEN_WEATHER_API_KEY!;
  const units = measurementSystem.toLowerCase();
  const exclude = 'minutely,hourly,alerts';

  const params: OpenWeatherApiRequestParams = {
    lat: city.latitude,
    lon: city.longitude,
    appid,
    units,
    exclude,
  };

  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};

export const fetchForecast = async (
  city: CityResult,
  measurementSystem: MeasurementSystemSettings
): Promise<ForecastResult> => {
  const baseUrl = process.env.REACT_APP_OPEN_WEATHER_BASE_URL!;
  const urlParams = createUrlParams(city, measurementSystem);

  const { data } = await axios.get(`${baseUrl}?${urlParams}`);

  return data;
};
