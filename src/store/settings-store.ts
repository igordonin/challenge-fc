import create from 'zustand';

interface Settings {
  hour12: boolean;
  toggleHour12: () => void;
}

export const useSettingsStore = create<Settings>((set) => ({
  hour12: true,
  toggleHour12: () =>
    set((state: Settings): Settings => {
      return {
        ...state,
        hour12: !state.hour12,
      };
    }),
}));
