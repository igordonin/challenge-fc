import * as React from 'react';
import { Clock } from './clock';
import {
  MenuItem,
  MenuLeft,
  MenuRight,
  MenuText,
  MenuWrapper,
  SearchInput,
  SearchTrigger,
} from './top-bar.styles';

export function TopBar() {
  const searchInputEl = React.useRef<HTMLInputElement>(null);

  const showSearchInput = () => {
    if (!searchInputEl.current) {
      return;
    }

    searchInputEl.current.className += ' active';
  };

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
          <MenuText>
            <SearchInput
              type={'text'}
              placeholder={'Search'}
              ref={searchInputEl}
            />
            <SearchTrigger
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showSearchInput();
              }}
            >
              Search
            </SearchTrigger>
          </MenuText>
        </MenuItem>
      </MenuRight>
    </MenuWrapper>
  );
}
