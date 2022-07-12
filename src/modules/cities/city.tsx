import { useCityStore } from '../../store';

interface CityProps {
  name: string;
  className?: string;
}

export const City = ({ name, className }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  const teste = selectedCity === name ? `${className} active` : className;

  return (
    <div className={teste} onClick={() => selectCity(name)}>
      {name}
    </div>
  );
};
