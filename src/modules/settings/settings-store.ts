import create from 'zustand';

export enum UnitSystems {
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
  unitSystem: UnitSystems;
  setClockAmPmOr24h: (clockAmPmOr24h: ClockSettings) => void;
  setUnitSystem: (unitSystem: UnitSystems) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  clockAmPmOr24h: ClockSettings.AM_PM,
  unitSystem: UnitSystems.IMPERIAL,
  setClockAmPmOr24h: (clockAmPmOr24h: ClockSettings) =>
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        clockAmPmOr24h,
      };
    }),
  setUnitSystem: (unitSystem: UnitSystems) => {
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        unitSystem,
      };
    });
  },
}));
