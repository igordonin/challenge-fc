import styled from 'styled-components';

export const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #000;
`;

export const MenuLeft = styled.li`
  float: left;
`;

export const MenuRight = styled.li`
  float: right;
`;

export const MenuItem = styled.div`
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const MenuText = styled.h2`
  margin: 0;
`;

export const SearchInput = styled.input`
  visibility: hidden;
  opacity: 0;
  position: relative;
  left: 80px;
  font-size: 24px;
  width: 10px;
  border: 1px solid #0a84ff;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  outline: none;
  transition: visibility 0s linear 1s, width 1s, opacity 1s;

  &.active {
    visibility: visible;
    width: 250px;
    opacity: 1;
    transition: visibility 0s linear 0.2s, width 1s, opacity 0.1s;
  }
`;

export const SearchTrigger = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const IconWrapper = styled.a`
  display: inline-block;
  position: relative;
  left: -24px;
  top: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;
