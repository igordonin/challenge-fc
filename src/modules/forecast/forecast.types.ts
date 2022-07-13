interface ForecastWeather {
  main: string; // Clouds
  description: string; // ?? few clouds
  icon: string; // ?? 02d
}

interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface ForecastSys {
  type: number; // 2
  sunrise: number; // 1657708021;
  sunset: number; //1657761917;
}

export interface ForecastResult {
  weather: ForecastWeather[];
  main: ForecastMain;
  sys: ForecastSys;
  timezone: number; //-18000;
}
