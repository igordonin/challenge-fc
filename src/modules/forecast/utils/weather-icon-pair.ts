import { SVGProps } from 'react';
import { Color } from '../../../utils/color.enum';
import { ReactComponent as WeatherCloudyIcon } from '../../../assets/weather/weather-cloudy.svg';
import { ReactComponent as WeatherFogIcon } from '../../../assets/weather/weather-fog.svg';
import { ReactComponent as WeatherHailIcon } from '../../../assets/weather/weather-hail.svg';
import { ReactComponent as WeatherLightningRainyIcon } from '../../../assets/weather/weather-lightning-rainy.svg';
import { ReactComponent as WeatherLightningIcon } from '../../../assets/weather/weather-lightning.svg';
import { ReactComponent as WeatherNightIcon } from '../../../assets/weather/weather-night.svg';
import { ReactComponent as WeatherPartlyCloudyIcon } from '../../../assets/weather/weather-partly-cloudy.svg';
import { ReactComponent as WeatherPouringIcon } from '../../../assets/weather/weather-pouring.svg';
import { ReactComponent as WeatherSnowyHeavyIcon } from '../../../assets/weather/weather-snowy-heavy.svg';
import { ReactComponent as WeatherSnowyRainyIcon } from '../../../assets/weather/weather-snowy-rainy.svg';
import { ReactComponent as WeatherSnowyIcon } from '../../../assets/weather/weather-snowy.svg';
import { ReactComponent as WeatherSunnyIcon } from '../../../assets/weather/weather-sunny.svg';
import { ReactComponent as WeatherSunsetDownIcon } from '../../../assets/weather/weather-sunset-down.svg';
import { ReactComponent as WeatherSunsetUpIcon } from '../../../assets/weather/weather-sunset-up.svg';
import { ReactComponent as WeatherSunsetIcon } from '../../../assets/weather/weather-sunset.svg';
import { ReactComponent as WeatherWindyVariantIcon } from '../../../assets/weather/weather-windy-variant.svg';
import { ReactComponent as WeatherWindyIcon } from '../../../assets/weather/weather-windy.svg';

export type WeatherIconProps = {
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
  color: Color;
};

export type WeatherIconPair = {
  [key: string]: WeatherIconProps;
};

export const weatherIcon: WeatherIconPair = {
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
