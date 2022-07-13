import { Outlet } from 'react-router-dom';
import { SettingsModal } from './modules/settings/settings-modal';
import { TopBar } from './components/top-bar';

export const App = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <Outlet />
      <SettingsModal />
    </>
  );
};
