import axios from 'axios';
import { CityResult } from '../cities';
import { ForecastResult } from './forecast.types';

type OpenWeatherApiRequestParams = {
  [key: string]: any;
};

const createUrlParams = (city: CityResult) => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY!;
  const _units = 'standard';
  const _exclude = 'minutely,hourly,alerts';

  const params: OpenWeatherApiRequestParams = {
    lat: city.latitude,
    lon: city.longitude,
    appid: apiKey,
    units: _units,
    exclude: _exclude,
  };

  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};

export const fetchForecast = async (
  city: CityResult
): Promise<ForecastResult> => {
  const baseUrl = process.env.REACT_APP_OPEN_WEATHER_BASE_URL!;
  const urlParams = createUrlParams(city);

  const { data } = await axios.get(`${baseUrl}?${urlParams}`);

  return data;
};
