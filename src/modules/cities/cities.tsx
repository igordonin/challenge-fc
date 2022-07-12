import { StyledCity } from './cities.styles';

const cities = Array(16).fill('City');

export const Cities = () => {
  return (
    <>
      {cities.map((city, index) => {
        return <StyledCity key={`city${index}`} name={`city${index}`} />;
      })}
    </>
  );
};
