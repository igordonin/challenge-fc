interface ForecastWeather {
  main: string; // Clouds
  description: string; // ?? few clouds
  icon: string; // ?? 02d
}

interface ForecastCurrent {
  sunrise: number; //1657708032;
  sunset: number; //1657761923;
  temp: number; //294.48;
  feels_like: number; //294.47;
  pressure: number; //1018;
  humidity: number; //69;
  weather: ForecastWeather[];
}

interface ForecastDayTemp {
  min: number;
  max: number;
}

interface ForecastDay {
  temp: ForecastDayTemp;
  weather: ForecastWeather[];
}

export interface ForecastResult {
  timezone: string; //-"America/Chicago";
  timezone_offset: number; //-18000;
  current: ForecastCurrent;
  daily: ForecastDay[];
}
