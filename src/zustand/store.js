import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBeerStore = create(
  persist(
    (set) => ({
      isLoader: false,
      collectionBeers: [],
      displayedBeers: null,
      setOnLoader: () => set(() => ({ isLoader: true })),
      setOffLoader: () => set(() => ({ isLoader: false })),

      setBeers: (newBeers) => set(() => ({ collectionBeers: newBeers })),
      setDisplayedBeers: () => {
        set((state) => ({
          displayedBeers: state.collectionBeers.slice(0, 15),
        }));
      },
      setFiveBeers: (newBeers) =>
        set((state) => ({
          collectionBeers: [...state.collectionBeers, ...newBeers],
        })),

      toggleBeer: (beerId) =>
        set((state) => ({
          collectionBeers: state.collectionBeers.map((beer) =>
            beer.id === beerId ? { ...beer, selected: !beer.selected } : beer
          ),
          displayedBeers: state.displayedBeers.map((beer) =>
            beer.id === beerId ? { ...beer, selected: !beer.selected } : beer
          ),
        })),

      deleteSelected: () =>
        set((state) => ({
          collectionBeers: state.collectionBeers.filter(
            (item) => !item.selected
          ),
        })),

      deleteFirstFive: () => {
        set((state) => ({
          collectionBeers: state.collectionBeers.slice(5),
        }));
      },
    }),
    {
      name: "beer-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
