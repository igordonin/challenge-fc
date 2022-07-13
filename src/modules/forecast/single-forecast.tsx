import { useCityStore } from '../../store';
import { ReactComponent as SunsetIcon } from '../../assets/weather-sunset.svg';
import {
  FlexContainer,
  FlexItem,
  FloatRight,
  Relative,
  Title,
} from './single-forecast.styles';

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

  return (
    <>
      <FlexContainer>
        <FlexItem>
          <Title>{selectedCity}</Title>
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
