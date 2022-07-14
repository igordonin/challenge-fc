import { ForecastResult } from '../forecast.types';
import { weatherCodesMappings } from './weather-codes-mappings';
import { WeatherIconProps } from './weather-icon-pair';

export const getWeatherIcon = (forecast: ForecastResult): WeatherIconProps => {
  const { current } = forecast;
  const [weather] = current.weather;

  const key = `${weather.id}|${weather.icon}`;

  return weatherCodesMappings[key];
};
