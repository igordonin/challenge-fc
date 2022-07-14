import { Link, useNavigate } from 'react-router-dom';
import {
  ForecastButton,
  ForecastButtonContainerTitle,
  ForecastButtonsContainer,
} from './forecast-navigation.styles';

export const ForecastNavigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <ForecastButtonContainerTitle>Forecast</ForecastButtonContainerTitle>
      <ForecastButtonsContainer>
        <ForecastButton onClick={() => navigate('/')}>Now</ForecastButton>
        <ForecastButton onClick={() => navigate('/7days')}>
          7 Days
        </ForecastButton>
      </ForecastButtonsContainer>
    </>
  );
};
