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
  isModalOpen: boolean;
  clockAmPmOr24h: ClockSettings;
  measurementSystem: MeasurementSystemSettings;
  toggleModal: () => void;
  setClockAmPmOr24h: (clockAmPmOr24h: ClockSettings) => void;
  setMeasurementSystem: (measurementSystem: MeasurementSystemSettings) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  isModalOpen: false,
  clockAmPmOr24h: ClockSettings.AM_PM,
  measurementSystem: MeasurementSystemSettings.STANDARD,
  toggleModal: () => {
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    });
  },
  setClockAmPmOr24h: (clockAmPmOr24h: ClockSettings) => {
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        clockAmPmOr24h,
      };
    });
  },
  setMeasurementSystem: (measurementSystem: MeasurementSystemSettings) => {
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        measurementSystem,
      };
    });
  },
}));
