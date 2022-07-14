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
import { getWeatherIcon } from './utils/forecast.utils';
import { ForecastDetails } from './single-forecast-details';

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
          <ForecastDetails forecast={forecast} />
        </FloatRight>
      </Relative>
    </>
  );
};
