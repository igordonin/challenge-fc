import styled from 'styled-components';
import { useCityStore } from '../../store';

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

interface CityProps {
  name: string;
  className?: string;
}

const cities = Array(16).fill('City');

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

const City = ({ name, className }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  return (
    <div className={className} onClick={() => selectCity(name)}>
      {name}
    </div>
  );
};

const StyledCity = styled(City)`
  border: 1px solid #fff;
  border-color: #0a84ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
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
          {cities.map((city, index) => {
            return <StyledCity key={`city${index}`} name={`city${index}`} />;
          })}
        </GridContainer>
      </FlexFooter>
    </FlexWrapper>
  );
};
