import { City } from './city';
import { useCityStore } from './city-store';

export const Cities = () => {
  const { cities } = useCityStore();

  return (
    <>
      {cities.map((city) => (
        <City key={city.name} city={city} />
      ))}
    </>
  );
};
