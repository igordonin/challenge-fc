import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from './app';
import './index.css';
import './fonts/Roboto-Regular.ttf';
import { SingleForecast } from './modules/forecast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { WeekForecast } from './modules/forecast/week-forecast';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<SingleForecast />} />
          <Route path="/7days" element={<WeekForecast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
