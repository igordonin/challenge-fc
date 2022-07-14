import { useQuery } from 'react-query';
import { City } from './city';
import { fetchRandomCities } from './city.queries';

export const Cities = () => {
  const { data, isLoading, isError } = useQuery(['cities'], fetchRandomCities);

  if (isLoading) {
    return <div>Loading cities...</div>;
  }

  if (isError) {
    return <div>Unexpected error. Please try again soon.</div>;
  }

  const cities = data || [];

  return (
    <>
      {cities.map((city) => (
        <City key={city.name} city={city} />
      ))}
    </>
  );
};
