import styled from 'styled-components';
import { useCityStore } from '../../store';

const cities = Array(16).fill('City');

interface CityProps {
  name: string;
  className?: string;
}

const City = ({ name, className }: CityProps) => {
  const { selectedCity, selectCity } = useCityStore();

  const teste = selectedCity === name ? `${className} active` : className;

  return (
    <div className={teste} onClick={() => selectCity(name)}>
      {name}
    </div>
  );
};

const StyledCity = styled(City)`
  border: 1px solid #fff;
  border-color: #0a84ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;

  &.active {
    background-color: #fff;
    border-color: #fff;
    color: #0a84ff;
  }
`;

export const Cities = () => {
  return (
    <>
      {cities.map((city, index) => {
        return <StyledCity key={`city${index}`} name={`city${index}`} />;
      })}
    </>
  );
};
