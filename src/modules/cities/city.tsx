import { useCityStore } from './city-store';
import { CityButton } from './city.styles';
import { CityResult } from './city.types';

interface CityProps {
  city: CityResult;
}

export const City = ({ city }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  const className = selectedCity?.name === city.name ? 'active' : '';

  return (
    <CityButton className={className} onClick={() => selectCity(city)}>
      {city.name}
    </CityButton>
  );
};
