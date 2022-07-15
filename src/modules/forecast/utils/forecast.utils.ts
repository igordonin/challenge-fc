import { ForecastWeather } from '../forecast.types';
import { weatherCodesMappings } from './weather-codes-mappings';
import { WeatherIconProps } from './weather-icon-pair';

export const getWeatherIcon = (weather: ForecastWeather): WeatherIconProps => {
  const key = `${weather.id}|${weather.icon}`;
  return weatherCodesMappings[key];
};
