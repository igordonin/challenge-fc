import { useCityStore } from '../../store';

interface CityProps {
  name: string;
  className?: string;
}

export const City = ({ name, className }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  const combinedClassNames =
    selectedCity === name ? `${className} active` : className;

  return (
    <div className={combinedClassNames} onClick={() => selectCity(name)}>
      {name}
    </div>
  );
};
