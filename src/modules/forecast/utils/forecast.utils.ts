import React, { SVGProps } from 'react';
import { ForecastResult } from '../forecast.types';
import { ReactComponent as WeatherCloudyIcon } from '../../assets/weather/weather-cloudy.svg';
import { ReactComponent as WeatherFogIcon } from '../../assets/weather/weather-fog.svg';
import { ReactComponent as WeatherHailIcon } from '../../assets/weather/weather-hail.svg';
import { ReactComponent as WeatherLightningRainyIcon } from '../../assets/weather/weather-lightning-rainy.svg';
import { ReactComponent as WeatherLightningIcon } from '../../assets/weather/weather-lightning.svg';
import { ReactComponent as WeatherNightIcon } from '../../assets/weather/weather-night.svg';
import { ReactComponent as WeatherPartlyCloudyIcon } from '../../assets/weather/weather-partly-cloudy.svg';
import { ReactComponent as WeatherPouringIcon } from '../../assets/weather/weather-pouring.svg';
import { ReactComponent as WeatherSnowyHeavyIcon } from '../../assets/weather/weather-snowy-heavy.svg';
import { ReactComponent as WeatherSnowyRainyIcon } from '../../assets/weather/weather-snowy-rainy.svg';
import { ReactComponent as WeatherSnowyIcon } from '../../assets/weather/weather-snowy.svg';
import { ReactComponent as WeatherSunnyIcon } from '../../assets/weather/weather-sunny.svg';
import { ReactComponent as WeatherSunsetDownIcon } from '../../assets/weather/weather-sunset-down.svg';
import { ReactComponent as WeatherSunsetUpIcon } from '../../assets/weather/weather-sunset-up.svg';
import { ReactComponent as WeatherSunsetIcon } from '../../assets/weather/weather-sunset.svg';
import { ReactComponent as WeatherWindyVariantIcon } from '../../assets/weather/weather-windy-variant.svg';
import { ReactComponent as WeatherWindyIcon } from '../../assets/weather/weather-windy.svg';

enum Color {
  BLACK = '#000',
  WHITE = '#FFF',
  PURPLE = '#BF5AF2',
  YELLOW = '#FFD60A',
  BLUE = '#0A84FF',
  CYAN = '#64D2FF',
}

type WeatherIconProps = {
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  color: Color;
};

type WeatherIconPair = {
  [key: string]: WeatherIconProps;
};

const weatherIcon: WeatherIconPair = {
  SUNNY: {
    icon: WeatherSunnyIcon,
    color: Color.YELLOW,
  },
  SUNSET_DOWN: {
    icon: WeatherSunsetDownIcon,
    color: Color.YELLOW,
  },
  SUNSET_UP: {
    icon: WeatherSunsetUpIcon,
    color: Color.YELLOW,
  },
  SUNSET: {
    icon: WeatherSunsetIcon,
    color: Color.YELLOW,
  },
  PARTLY_CLOUDY: {
    icon: WeatherPartlyCloudyIcon,
    color: Color.YELLOW,
  },
  LIGHTNING_RAINY: {
    icon: WeatherLightningRainyIcon,
    color: Color.BLUE,
  },
  LIGHTNING: {
    icon: WeatherLightningIcon,
    color: Color.BLUE,
  },
  FOG: {
    icon: WeatherFogIcon,
    color: Color.BLUE,
  },
  CLOUDY: {
    icon: WeatherCloudyIcon,
    color: Color.BLUE,
  },
  WINDY_VARIANT: {
    icon: WeatherWindyVariantIcon,
    color: Color.BLUE,
  },
  WINDY: {
    icon: WeatherWindyIcon,
    color: Color.BLUE,
  },
  POURING: {
    icon: WeatherPouringIcon,
    color: Color.YELLOW,
  },
  HAIL: {
    icon: WeatherHailIcon,
    color: Color.CYAN,
  },
  SNOWY_HEAVY: {
    icon: WeatherSnowyHeavyIcon,
    color: Color.CYAN,
  },
  SNOWY_RAINY: {
    icon: WeatherSnowyRainyIcon,
    color: Color.CYAN,
  },
  SNOWY: {
    icon: WeatherSnowyIcon,
    color: Color.CYAN,
  },
  NIGHT: {
    icon: WeatherNightIcon,
    color: Color.PURPLE,
  },
};

const weatherCodesMappings: WeatherIconPair = {
  '200|11d': weatherIcon.LIGHTNING_RAINY,
  '201|11d': weatherIcon.LIGHTNING_RAINY,
  '202|11d': weatherIcon.LIGHTNING_RAINY,
  '210|11d': weatherIcon.LIGHTNING,
  '211|11d': weatherIcon.LIGHTNING,
  '212|11d': weatherIcon.LIGHTNING,
  '221|11d': weatherIcon.LIGHTNING,
  '230|11d': weatherIcon.LIGHTNING_RAINY,
  '231|11d': weatherIcon.LIGHTNING_RAINY,
  '232|11d': weatherIcon.LIGHTNING_RAINY,
  '300|09d': weatherIcon.HAIL,
  '301|09d': weatherIcon.HAIL,
  '302|09d': weatherIcon.HAIL,
  '310|09d': weatherIcon.HAIL,
  '311|09d': weatherIcon.HAIL,
  '312|09d': weatherIcon.HAIL,
  '313|09d': weatherIcon.HAIL,
  '314|09d': weatherIcon.HAIL,
  '321|09d': weatherIcon.HAIL,
  '500|10d': weatherIcon.POURING,
  '501|10d': weatherIcon.POURING,
  '502|10d': weatherIcon.POURING,
  '503|10d': weatherIcon.POURING,
  '504|10d': weatherIcon.POURING,
  '511|13d': weatherIcon.POURING,
  '520|09d': weatherIcon.POURING,
  '521|09d': weatherIcon.POURING,
  '522|09d': weatherIcon.POURING,
  '531|09d': weatherIcon.POURING,
  '600|13d': weatherIcon.SNOWY,
  '601|13d': weatherIcon.SNOWY,
  '602|13d': weatherIcon.SNOWY_HEAVY,
  '611|13d': weatherIcon.SNOWY_RAINY,
  '612|13d': weatherIcon.SNOWY_RAINY,
  '613|13d': weatherIcon.SNOWY_RAINY,
  '615|13d': weatherIcon.SNOWY_RAINY,
  '616|13d': weatherIcon.SNOWY_RAINY,
  '620|13d': weatherIcon.SNOWY,
  '621|13d': weatherIcon.SNOWY,
  '622|13d': weatherIcon.SNOWY_HEAVY,
  '701|50d': weatherIcon.FOG,
  '711|50d': weatherIcon.FOG,
  '721|50d': weatherIcon.FOG,
  '731|50d': weatherIcon.FOG,
  '741|50d': weatherIcon.FOG,
  '751|50d': weatherIcon.FOG,
  '761|50d': weatherIcon.FOG,
  '762|50d': weatherIcon.FOG,
  '771|50d': weatherIcon.FOG,
  '781|50d': weatherIcon.FOG,
  '800|01d': weatherIcon.SUNNY,
  '800|01n': weatherIcon.NIGHT,
  '801|02d': weatherIcon.PARTLY_CLOUDY,
  '801|02n': weatherIcon.PARTLY_CLOUDY,
  '802|03d': weatherIcon.PARTLY_CLOUDY,
  '802|03n': weatherIcon.PARTLY_CLOUDY,
  '803|04d': weatherIcon.CLOUDY,
  '803|04n': weatherIcon.CLOUDY,
  '804|04d': weatherIcon.CLOUDY,
  '804|04n': weatherIcon.CLOUDY,
};

export const getWeatherIcon = (forecast: ForecastResult): WeatherIconProps => {
  const { current } = forecast;
  const [weather] = current.weather;

  const key = `${weather.id}|${weather.icon}`;

  return weatherCodesMappings[key];
};
