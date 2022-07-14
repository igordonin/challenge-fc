import * as React from 'react';
import { useCityStore } from '../modules/cities';
import { Cities } from '../modules/cities';
import { fetchRandomCities } from '../modules/cities/city.queries';
import {
  FlexFooter,
  FlexMain,
  FlexWrapper,
  GridContainer,
} from './forecast.styles';
import { SingleForecast } from '../modules/forecast/single-forecast';

const NoSelectedCity = () => {
  return <h1>Pick a city to see the full forecast</h1>;
};

const LoadingCities = () => <h1>Loading Cities</h1>;

export const Forecast = () => {
  const { selectedCity, cities, setCities } = useCityStore();

  React.useEffect(() => {
    const doRequest = async () => {
      const cities = await fetchRandomCities();
      setCities(cities);
    };

    doRequest();
  }, []);

  return (
    <FlexWrapper>
      <FlexMain>
        {selectedCity && <SingleForecast />}
        {!selectedCity && <NoSelectedCity />}
      </FlexMain>
      <FlexFooter>
        {!cities.length && <LoadingCities />}
        <GridContainer>
          <Cities />
        </GridContainer>
      </FlexFooter>
    </FlexWrapper>
  );
};
