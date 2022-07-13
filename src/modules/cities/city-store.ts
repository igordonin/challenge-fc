import create from 'zustand';
import { CityResult } from './city.types';

interface CityStore {
  selectedCity: CityResult | null;
  selectCity: (selectedCity: CityResult) => void;
}

export const useCityStore = create<CityStore>((set) => ({
  selectedCity: null,
  selectCity: (selectedCity: CityResult) =>
    set((state: CityStore): CityStore => {
      return {
        ...state,
        selectedCity,
      };
    }),
}));
