import * as React from 'react';
import { Clock } from './clock';
import {
  IconWrapper,
  MenuItem,
  MenuLeft,
  MenuRight,
  MenuText,
  MenuWrapper,
  SearchInput,
  MenuLink,
} from './top-bar.styles';
import { useSettingsStore } from '../modules/settings';
import { ReactComponent as CloseIcon } from '../assets/close-circle.svg';

export const TopBar = () => {
  const searchInputEl = React.useRef<HTMLInputElement>(null);
  const clearSearchEl = React.useRef<HTMLAnchorElement>(null);

  const showSearchInput = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (!searchInputEl.current || !clearSearchEl.current) {
      return;
    }

    searchInputEl.current.className += ' active';
    clearSearchEl.current.className += ' active';
  };

  const hideSearchInput = (e: React.BaseSyntheticEvent) => {
    e.preventDefault;

    if (!searchInputEl.current || !clearSearchEl.current) {
      return;
    }

    const removeClassNameActive = (classNames: string): string => {
      return classNames
        .split(' ')
        .filter((name) => name !== 'active')
        .join(' ');
    };

    searchInputEl.current.className = removeClassNameActive(
      searchInputEl.current.className
    );

    clearSearchEl.current.className = removeClassNameActive(
      clearSearchEl.current.className
    );
  };

  const { toggleModal } = useSettingsStore();

  const onSettingsClick = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    toggleModal();
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
          <MenuText>
            <MenuLink href="#" onClick={onSettingsClick}>
              Settings
            </MenuLink>
          </MenuText>
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
            <MenuLink href="#" onClick={showSearchInput}>
              Search
            </MenuLink>
            <IconWrapper ref={clearSearchEl}>
              <CloseIcon fill="#fff" href="#" onClick={hideSearchInput} />
            </IconWrapper>
          </MenuText>
        </MenuItem>
      </MenuRight>
    </MenuWrapper>
  );
};
