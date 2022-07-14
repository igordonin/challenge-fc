import {
  ForecastButton,
  ForecastButtonContainerTitle,
  ForecastButtonsContainer,
} from './forecast-navigation.styles';

export const ForecastNavigation = () => {
  return (
    <>
      <ForecastButtonContainerTitle>Forecast</ForecastButtonContainerTitle>
      <ForecastButtonsContainer>
        <ForecastButton>Now</ForecastButton>
        <ForecastButton>7 Days</ForecastButton>
      </ForecastButtonsContainer>
    </>
  );
};
