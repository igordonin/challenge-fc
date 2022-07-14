import create from 'zustand';
import { CityResult } from './city.types';

interface CityStore {
  cities: CityResult[];
  selectedCity: CityResult | null;
  setCities: (cities: CityResult[]) => void;
  selectCity: (selectedCity: CityResult) => void;
}

export const useCityStore = create<CityStore>((set) => ({
  cities: [],
  selectedCity: null,
  setCities: (cities: CityResult[]) => {
    set((state: CityStore): CityStore => {
      return {
        ...state,
        cities,
      };
    });
  },
  selectCity: (selectedCity: CityResult) =>
    set((state: CityStore): CityStore => {
      return {
        ...state,
        selectedCity,
      };
    }),
}));
