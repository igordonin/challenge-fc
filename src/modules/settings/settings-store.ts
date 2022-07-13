import create from 'zustand';

export enum MeasurementSystemSettings {
  IMPERIAL = 'Imperial',
  METRIC = 'Metric',
  STANDARD = 'Standard',
}

export enum ClockSettings {
  AM_PM = 'AM/PM',
  CLOCK_24 = '24h',
}

interface SettingsStore {
  clockAmPmOr24h: ClockSettings;
  measurementSystem: MeasurementSystemSettings;
  setClockAmPmOr24h: (clockAmPmOr24h: ClockSettings) => void;
  setMeasurementSystem: (measurementSystem: MeasurementSystemSettings) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  clockAmPmOr24h: ClockSettings.AM_PM,
  measurementSystem: MeasurementSystemSettings.IMPERIAL,
  setClockAmPmOr24h: (clockAmPmOr24h: ClockSettings) =>
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        clockAmPmOr24h,
      };
    }),
  setMeasurementSystem: (unitSystem: MeasurementSystemSettings) => {
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        measurementSystem: unitSystem,
      };
    });
  },
}));
