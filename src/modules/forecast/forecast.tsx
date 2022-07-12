import styled from 'styled-components';

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
  return <div className={className}>{name}</div>;
};

const StyledCity = styled(City)`
  border: 1px solid #fff;
  border-color: #0a84ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

export const Forecast = () => {
  return (
    <FlexWrapper>
      <FlexMain>
        <h3>Pick a city to see the full forecast</h3>
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
