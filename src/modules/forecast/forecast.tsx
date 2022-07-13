import { useCityStore } from '../../store';
import { Cities } from '../cities/cities';
import {
  FlexFooter,
  FlexMain,
  FlexWrapper,
  GridContainer,
} from './forecast.styles';
import { SingleForecast } from './single-forecast';

const NoSelectedCity = () => {
  return <h3>Pick a city to see the full forecast</h3>;
};

export const Forecast = () => {
  const { selectedCity } = useCityStore();

  return (
    <FlexWrapper>
      <FlexMain>
        {selectedCity && <SingleForecast />}
        {!selectedCity && <NoSelectedCity />}
      </FlexMain>
      <FlexFooter>
        <GridContainer>
          <Cities />
        </GridContainer>
      </FlexFooter>
    </FlexWrapper>
  );
};
