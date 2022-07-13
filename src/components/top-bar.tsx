import { Clock } from './clock';
import {
  MenuItem,
  MenuLeft,
  MenuRight,
  MenuText,
  MenuWrapper,
} from './top-bar.styles';

export function TopBar() {
  return (
    <MenuWrapper>
      <MenuLeft>
        <MenuItem>
          <Clock />
        </MenuItem>
      </MenuLeft>

      <MenuRight>
        <MenuItem>
          <MenuText>Settings</MenuText>
        </MenuItem>
      </MenuRight>

      <MenuRight>
        <MenuItem>
          <MenuText>Search</MenuText>
        </MenuItem>
      </MenuRight>
    </MenuWrapper>
  );
}
