import { ClockSettings } from '../modules/settings';

interface ConvertToTimeOptions {
  clockSetting?: ClockSettings;
}

export const convertToTime = (date: Date, options?: ConvertToTimeOptions) => {
  const _options = options || {};
  const _clockSetting = _options.clockSetting || ClockSettings.AM_PM;

  return date.toLocaleTimeString('en-US', {
    timeStyle: 'short',
    hour12: _clockSetting === ClockSettings.AM_PM,
  });
};

export const convertToTimezoneTime = (
  date: Date,
  timeZone: string,
  options?: ConvertToTimeOptions
) => {
  const _options = options || {};
  const _clockSetting = _options.clockSetting || ClockSettings.AM_PM;

  return date.toLocaleTimeString('en-US', {
    timeStyle: 'short',
    hour12: _clockSetting === ClockSettings.AM_PM,
    timeZone,
  });
};
