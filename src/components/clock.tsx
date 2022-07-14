import * as React from 'react';
import { ClockSettings, useSettingsStore } from '../modules/settings';
import { convertToTime } from '../utils/date-fns';
import { StyledTime } from './clock.styles';

interface ClockProps {
  setting?: ClockSettings;
}

export const Clock = ({ setting }: ClockProps) => {
  const { clockAmPmOr24h } = useSettingsStore((state) => state);
  const [date, setDate] = React.useState(new Date());

  const clockSetting = setting || clockAmPmOr24h;

  React.useEffect(() => {
    const fiveSeconds = 5 * 1000;
    const ticker = setInterval(() => setDate(new Date()), fiveSeconds);

    return () => {
      clearInterval(ticker);
    };
  });

  return <StyledTime>{convertToTime(date, { clockSetting })}</StyledTime>;
};
