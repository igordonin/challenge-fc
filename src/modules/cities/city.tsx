import { Button } from '../../components/button';
import { useCityStore } from './city-store';
import { CityResult } from './city.types';

interface CityProps {
  city: CityResult;
}

export const City = ({ city }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  const className = selectedCity?.name === city.name ? 'active' : '';

  return (
    <Button className={className} onClick={() => selectCity(city)}>
      {city.name}
    </Button>
  );
};
