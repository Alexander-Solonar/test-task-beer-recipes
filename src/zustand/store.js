import { create } from "zustand";

export const useBeerStore = create((set) => ({
  collectionBeers: [],
  displayedBeers: null,
  setBeers: (newBeers) => set((state) => ({ collectionBeers: newBeers })),

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
      collectionBeers: state.collectionBeers.filter((item) => !item.selected),
    })),
  setDisplayedBeers: () => {
    set((state) => ({ displayedBeers: state.collectionBeers.slice(0, 15) }));
  },
}));
