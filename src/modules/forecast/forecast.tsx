import { useCityStore } from '../../store';
import { Cities } from '../cities/cities';
import {
  FlexFooter,
  FlexMain,
  FlexWrapper,
  GridContainer,
} from './forecast.styles';

const NoSelectedCity = () => {
  return <h3>Pick a city to see the full forecast</h3>;
};

const SelectedCity = () => {
  const { selectedCity } = useCityStore();
  return <h3>City selected: {selectedCity}</h3>;
};

export const Forecast = () => {
  const { selectedCity } = useCityStore();

  return (
    <FlexWrapper>
      <FlexMain>
        {selectedCity && <SelectedCity />}
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
