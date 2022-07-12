import styled from 'styled-components';
import { City } from './city';

export const StyledCity = styled(City)`
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
