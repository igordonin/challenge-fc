import { useCityStore } from './city-store';
import { CityButton } from './city.styles';

interface CityProps {
  name: string;
}

export const City = ({ name }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  const className = selectedCity === name ? 'active' : '';

  return (
    <CityButton className={className} onClick={() => selectCity(name)}>
      {name}
    </CityButton>
  );
};
