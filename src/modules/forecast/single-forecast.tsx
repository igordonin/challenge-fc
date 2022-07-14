import * as React from 'react';
import { useCityStore } from '../cities';
import {
  NavigationGridItem,
  SingleForecastContainer,
  SingleForecastLeftBox,
  SingleForecastRightBox,
  Title,
} from './single-forecast.styles';
import { useQuery } from 'react-query';
import { fetchForecast } from './forecast.queries';
import { getWeatherIcon } from './utils/forecast.utils';
import { ForecastDetails } from './single-forecast-details';
import { useSettingsStore } from '../settings';
import { ForecastNavigation } from './forecast-navigation';

export const SingleForecast = () => {
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

  const { icon: Icon, color } = getWeatherIcon(forecast!);

  return (
    <>
      <SingleForecastContainer>
        <SingleForecastLeftBox>
          <Title>{selectedCity.name}</Title>
          <Icon fill={color} width={150} height={'100%'} />
          <Title>{forecast.current.weather[0].description}</Title>
        </SingleForecastLeftBox>

        <SingleForecastRightBox>
          <ForecastDetails forecast={forecast} />
        </SingleForecastRightBox>

        <NavigationGridItem>
          <ForecastNavigation />
        </NavigationGridItem>
      </SingleForecastContainer>
    </>
  );
};
