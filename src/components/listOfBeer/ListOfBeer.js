import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import throttle from "lodash.throttle";
import { useBeerStore } from "../../zustand/store";
import * as API from "../../services/API";
import css from "./ListOfBeer.module.css";

const ListOfBeer = () => {
  const [newColleCtion, setNewColleCtion] = useState([]);
  const [page, setPage] = useState(6);
  const displayedBeers = useBeerStore((state) => state.displayedBeers);
  const toggleBeer = useBeerStore((state) => state.toggleBeer);
  const deleteFirstFive = useBeerStore((state) => state.deleteFirstFive);
  const setDisplayedBeers = useBeerStore((state) => state.setDisplayedBeers);
  const setFiveBeers = useBeerStore((state) => state.setFiveBeers);

  useEffect(() => {
    (async () => {
      try {
        const listBeers = await API.getNextFiveBeer(page);
        setNewColleCtion(listBeers);
      } catch {}
    })();
  }, [page]);

  const handleClick = (beerId, event) => {
    if (event.button === 2) {
      event.preventDefault();
      toggleBeer(beerId);
    }
  };

  const handleSroll = throttle(({ target }) => {
    console.log(target.scrollHeight);
    if (target.scrollTop + target.clientHeight === target.scrollHeight) {
      setPage((prevPage) => prevPage + 1);
      deleteFirstFive();
      setDisplayedBeers();
      setFiveBeers(newColleCtion);
    }
  }, 250);

  return (
    <ul className={css.list} onScroll={handleSroll}>
      {displayedBeers !== null &&
        displayedBeers.map((item) => (
          <li className={css.item} key={item.id}>
            <Link
              className={css.link}
              to={`/recipe/${item.id}`}
              onClick={(event) => handleClick(item.id, event)}
              onContextMenu={(event) => handleClick(item.id, event)}
              style={{
                backgroundColor: item.selected ? "yellow" : "transparent",
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ListOfBeer;
