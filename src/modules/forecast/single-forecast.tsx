import * as React from 'react';
import { useCityStore } from '../cities';
import {
  FlexContainer,
  FlexItem,
  FloatRight,
  Relative,
  Title,
} from './single-forecast.styles';
import { ReactComponent as SunsetIcon } from '../../assets/weather-sunset.svg';
import { useQuery } from 'react-query';
import { fetchForecast } from './forecast.queries';

const Details = () => {
  return (
    <div>
      Temp: 78º <br />
      Feels Like 80º <br />
      Humidity: 100% <br />
      Sunrise: 6:48 AM <br />
      Sunset: 7:23 PM
    </div>
  );
};

export const SingleForecast = () => {
  const { selectedCity } = useCityStore();

  if (!selectedCity) {
    throw new Error('Should only be rendered when a city is selected.');
  }

  const { data, isLoading, isError } = useQuery(
    ['forecasts', selectedCity],
    () => fetchForecast(selectedCity.name, selectedCity.country)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const forecast = data || {};

  return (
    <>
      <FlexContainer>
        <FlexItem>
          <Title>{selectedCity.name}</Title>
        </FlexItem>
        <FlexItem>
          <SunsetIcon fill="#ffd60a" width={150} height={'100%'} />
        </FlexItem>
        <FlexItem>
          <Title>Sunset</Title>
        </FlexItem>
      </FlexContainer>
      <Relative>
        <FloatRight>
          <Details />
        </FloatRight>
      </Relative>
    </>
  );
};
