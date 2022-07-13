import styled from 'styled-components';

export const ButtonText = styled.h3`
  margin: 0px;
  padding: 5px 10px;
`;

export const StyledButton = styled.button`
  border: 1px solid #0a84ff;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  margin: 0 5px;
  width: 160px;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: #fff;
    color: #0a84ff;
  }
`;
