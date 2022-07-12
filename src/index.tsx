import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './app';
import './index.css';
import './fonts/Roboto-Regular.ttf';
import { Forecast } from './modules/forecast/forecast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Forecast />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
