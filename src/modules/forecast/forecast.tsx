import styled from 'styled-components';
import { useCityStore } from '../../store';
import { Cities } from '../cities/cities';

const FlexWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 90vh;
`;

const FlexMain = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

const FlexFooter = styled.div`
  min-height: 200px;
`;

const GridContainer = styled.div`
  display: grid;

  grid-column-gap: 1em;
  grid-row-gap: 0.5em;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

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
