import create from 'zustand';

interface SettingsStore {
  hour12: boolean;
  toggleHour12: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  hour12: true,
  toggleHour12: () =>
    set((state: SettingsStore): SettingsStore => {
      return {
        ...state,
        hour12: !state.hour12,
      };
    }),
}));
