import { useEffect, useState } from "react";
import ListOfBeer from "../../components/listOfBeer/ListOfBeer";
import { useBeerStore } from "../../zustand/store";
import * as API from "../../services/API";

const Home = () => {
  const [page, setPage] = useState(1);
  const displayedBeers = useBeerStore((state) => state.displayedBeers);
  const setBeers = useBeerStore((state) => state.setBeers);
  const setDisplayedBeers = useBeerStore((state) => state.setDisplayedBeers);

  useEffect(() => {
    if (displayedBeers === null || displayedBeers.length === 0) {
      (async () => {
        try {
          const listBeers = await API.getListOfBeer(page);
          setBeers(listBeers);
          setDisplayedBeers();
        } catch {}
      })();
    }
  }, [displayedBeers, page, setBeers, setDisplayedBeers]);

  useEffect(() => {
    if (displayedBeers === null) return;

    if (displayedBeers.length === 0) {
      setPage((prevPage) => (prevPage += 1));
    }
  }, [displayedBeers]);
  return (
    <div>
      <ListOfBeer />
    </div>
  );
};

export default Home;
