export interface ForecastWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ForecastCurrent {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  weather: ForecastWeather[];
}

interface ForecastDayTemp {
  min: number;
  max: number;
}

export interface ForecastDay {
  dt: number;
  temp: ForecastDayTemp;
  weather: ForecastWeather[];
}

export interface ForecastResult {
  timezone: string;
  timezone_offset: number;
  current: ForecastCurrent;
  daily: ForecastDay[];
}
