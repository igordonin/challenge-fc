import { useLocation, useNavigate } from 'react-router-dom';
import {
  ForecastButton,
  ForecastButtonContainerTitle,
  ForecastButtonsContainer,
} from './forecast-navigation.styles';

export const ForecastNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const active = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <>
      <ForecastButtonContainerTitle>Forecast</ForecastButtonContainerTitle>
      <ForecastButtonsContainer>
        <ForecastButton onClick={() => navigate('/')} className={active('/')}>
          Now
        </ForecastButton>
        <ForecastButton
          onClick={() => navigate('/7days')}
          className={active('/7days')}
        >
          7 Days
        </ForecastButton>
      </ForecastButtonsContainer>
    </>
  );
};
