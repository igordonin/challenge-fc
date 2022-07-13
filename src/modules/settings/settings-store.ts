import create from 'zustand';

export enum UnitSystems {
  IMPERIAL = 'Imperial',
  METRIC = 'Metric',
  STANDARD = 'Standard',
}

export enum TimeSettings {
  AM_PM = 'AM/PM',
  CLOCK_24 = '24h',
}

interface SettingsStore {
  hour12: boolean;
  unitSystem: UnitSystems;
  toggleHour12: () => void;
  setUnitSystem: (unitSystem: UnitSystems) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  hour12: true,
  unitSystem: UnitSystems.IMPERIAL,
  toggleHour12: () =>
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        hour12: !state.hour12,
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
