import { Outlet } from 'react-router-dom';
import { TopBar } from './components/top-bar';

export const App = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};
