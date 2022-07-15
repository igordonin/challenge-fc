import * as React from 'react';
import { useCityStore } from '../cities';
import { Title } from './single-forecast.styles';
import { useQuery } from 'react-query';
import { fetchForecast } from './forecast.queries';
import { getWeatherIcon } from './utils/forecast.utils';
import { useSettingsStore } from '../settings';
import { ForecastNavigation } from './forecast-navigation';
import {
  WeekForecastContainer,
  WeekForecastMiddleRow,
  WeekForecastTitle,
} from './week-forecast.styles';
import { ForecastDay } from './forecast.types';

interface DayForecastProps {
  forecast: ForecastDay;
}

const DayForecast = ({ forecast }: DayForecastProps) => {
  const [weather] = forecast.weather;

  const { icon: Icon, color } = getWeatherIcon(weather);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = new Date(forecast.dt * 1000).getDay();
  const dayOfWeek = weekDays[day];

  return (
    <div>
      <div>{dayOfWeek}</div>
      <Icon fill={color} width={150} height={'70%'} />
      <Title>{weather.description}</Title>
      <Title>
        <span>H: {forecast.temp.max}</span>
        <span>{` / `}</span>
        <span>L: {forecast.temp.min}</span>
      </Title>
    </div>
  );
};

export const WeekForecast = () => {
  const { selectedCity } = useCityStore();
  const { measurementSystem } = useSettingsStore();

  if (!selectedCity) {
    throw new Error('Should only be rendered when a city is selected.');
  }

  const {
    data: forecast,
    isLoading,
    isError,
  } = useQuery(['forecast', selectedCity, measurementSystem], () =>
    fetchForecast(selectedCity, measurementSystem)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !forecast) {
    return <div>Error</div>;
  }

  const daily = forecast.daily.splice(1).map((day) => {
    return <DayForecast forecast={day} key={day.dt} />;
  });

  return (
    <>
      <WeekForecastContainer>
        <WeekForecastTitle>{selectedCity.name}</WeekForecastTitle>
        <WeekForecastMiddleRow>{daily}</WeekForecastMiddleRow>
        <ForecastNavigation />
      </WeekForecastContainer>
    </>
  );
};
