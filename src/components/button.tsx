import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #fff;
  border-color: #0a84ff;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: #000;
  color: #fff;

  &.active,
  &:hover {
    background-color: #fff;
    border-color: #fff;
    color: #0a84ff;
    font-weight: bold;
  }
`;
