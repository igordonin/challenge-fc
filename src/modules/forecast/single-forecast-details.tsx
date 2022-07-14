import { convertToTimezoneTime } from '../../utils/date-fns';
import { useSettingsStore } from '../settings';
import { ForecastResult } from './forecast.types';

interface DetailsProps {
  forecast: ForecastResult;
}

export const ForecastDetails = ({ forecast }: DetailsProps) => {
  const { clockAmPmOr24h } = useSettingsStore();

  const { current } = forecast;

  const sunrise = convertToTimezoneTime(
    new Date(current.sunrise * 1000),
    forecast.timezone,
    {
      clockSetting: clockAmPmOr24h,
    }
  );

  const sunset = convertToTimezoneTime(
    new Date(current.sunset * 1000),
    forecast.timezone,
    {
      clockSetting: clockAmPmOr24h,
    }
  );

  return (
    <div>
      <div>Temp: {current.temp}º</div>
      <div>Feels Like: {current.feels_like}º</div>
      <div>Humidity: {current.humidity}%</div>
      <div>Sunrise: {sunrise}</div>
      <div>Sunset: {sunset}</div>
    </div>
  );
};
