import styled from 'styled-components';

const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #666;
`;

const MenuLeft = styled.li`
  float: left;
`;

const MenuRight = styled.li`
  float: right;
`;

const MenuLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export function TopBar() {
  return (
    <MenuWrapper>
      <MenuLeft>
        <MenuLink>3:25 pm</MenuLink>
      </MenuLeft>

      <MenuRight>
        <MenuLink>Settings</MenuLink>
      </MenuRight>

      <MenuRight>
        <MenuLink>Search</MenuLink>
      </MenuRight>
    </MenuWrapper>
  );
}
