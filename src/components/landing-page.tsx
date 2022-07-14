import * as React from 'react';
import { useCityStore } from '../modules/cities';
import { Cities } from '../modules/cities';
import { fetchRandomCities } from '../modules/cities/city.queries';
import {
  FlexFooter,
  FlexMain,
  FlexWrapper,
  GridContainer,
} from './landing-page.styles';
import { SingleForecast } from '../modules/forecast/single-forecast';
import { Outlet } from 'react-router-dom';

const NoSelectedCity = () => {
  return <h1>Pick a city to see the full forecast</h1>;
};

const LoadingCities = () => <h1>Loading Cities</h1>;

export const LandingPage = () => {
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
        {selectedCity && <Outlet />}
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
