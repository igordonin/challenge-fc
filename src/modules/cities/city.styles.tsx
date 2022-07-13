import styled from 'styled-components';

export const CityButton = styled.button`
  border: 1px solid #fff;
  border-color: #0a84ff;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: #000;
  color: #fff;

  &.active {
    background-color: #fff;
    border-color: #fff;
    color: #0a84ff;
  }
`;
