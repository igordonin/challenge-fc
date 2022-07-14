import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LandingPage } from './components/landing-page';
import { TopBar } from './components/top-bar';
import { SettingsModal } from './modules/settings';

const TopContainer = styled.div`
  height: 8vh;
  overflow: hidden;
  margin: 0;
  padding: 0 10px;
`;

const BottomContainer = styled.div`
  height: 89vh;
  overflow: hidden;
  margin: 0;
  padding: 0 10px;
`;

export const App = (): JSX.Element => {
  return (
    <>
      <TopContainer>
        <TopBar />
      </TopContainer>
      <BottomContainer>
        <LandingPage />
      </BottomContainer>
      <SettingsModal />
    </>
  );
};
