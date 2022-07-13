import create from 'zustand';

interface CityStore {
  selectedCity: string | null;
  selectCity: (selected: string) => void;
}

export const useCityStore = create<CityStore>((set) => ({
  selectedCity: null,
  selectCity: (selectedCity: string) =>
    set((state: CityStore): CityStore => {
      return {
        ...state,
        selectedCity,
      };
    }),
}));
