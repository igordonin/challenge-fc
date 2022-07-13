import { Outlet } from 'react-router-dom';
import { TopBar } from './components/top-bar';
import { SettingsModal } from './modules/settings';

export const App = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <Outlet />
      <SettingsModal />
    </>
  );
};
