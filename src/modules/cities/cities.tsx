import { City } from './city';

const cities = Array(18).fill('City');

export const Cities = () => {
  return (
    <>
      {cities.map((city, index) => {
        return <City key={`city${index}`} name={`city${index}`} />;
      })}
    </>
  );
};
