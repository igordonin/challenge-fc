import * as React from 'react';
import { ClockSettings, useSettingsStore } from '../modules/settings';
import { StyledTime } from './clock.styles';

interface ClockProps {
  setting?: ClockSettings;
}

export const Clock = ({ setting }: ClockProps) => {
  const { clockAmPmOr24h } = useSettingsStore((state) => state);
  const [time, setTime] = React.useState(new Date());

  const clockSetting = setting || clockAmPmOr24h;

  React.useEffect(() => {
    const fiveSeconds = 5 * 1000;
    const ticker = setInterval(() => setTime(new Date()), fiveSeconds);

    return () => {
      clearInterval(ticker);
    };
  });

  return (
    <StyledTime>
      {time.toLocaleTimeString('en-US', {
        timeStyle: 'short',
        hour12: clockSetting === ClockSettings.AM_PM,
      })}
    </StyledTime>
  );
};
