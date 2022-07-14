import * as React from 'react';
import { useCityStore } from '../cities';
import {
  FlexContainer,
  FlexItem,
  FloatRight,
  Relative,
  Title,
} from './single-forecast.styles';
import { useQuery } from 'react-query';
import { fetchForecast } from './forecast.queries';
import { ForecastResult } from './forecast.types';
import { convertToTimezoneTime } from '../../utils/date-fns';
import { getWeatherIcon } from './utils/forecast.utils';

interface DetailsProps {
  forecast: ForecastResult;
}

const Details = ({ forecast }: DetailsProps) => {
  const { current } = forecast;

  const sunrise = convertToTimezoneTime(
    new Date(current.sunrise * 1000),
    forecast.timezone
  );

  const sunset = convertToTimezoneTime(
    new Date(current.sunset * 1000),
    forecast.timezone
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

export const SingleForecast = () => {
  const { selectedCity } = useCityStore();

  if (!selectedCity) {
    throw new Error('Should only be rendered when a city is selected.');
  }

  const {
    data: forecast,
    isLoading,
    isError,
  } = useQuery(['forecast', selectedCity], () => fetchForecast(selectedCity));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !forecast) {
    return <div>Error</div>;
  }

  const { icon: Icon, color } = getWeatherIcon(forecast!);

  return (
    <>
      <FlexContainer>
        <FlexItem>
          <Title>{selectedCity.name}</Title>
        </FlexItem>
        <FlexItem>
          <Icon fill={color} width={150} height={'100%'} />
        </FlexItem>
        <FlexItem>
          <Title>{forecast.current.weather[0].description}</Title>
        </FlexItem>
      </FlexContainer>
      <Relative>
        <FloatRight>
          <Details forecast={forecast} />
        </FloatRight>
      </Relative>
    </>
  );
};
