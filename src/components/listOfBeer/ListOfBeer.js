import { Link } from "react-router-dom";
import { useBeerStore } from "../../zustand/store";
import css from "./ListOfBeer.module.css";

const ListOfBeer = () => {
  const displayedBeers = useBeerStore((state) => state.displayedBeers);
  const toggleBeer = useBeerStore((state) => state.toggleBeer);

  const handleClick = (beerId, event) => {
    if (event.button === 2) {
      event.preventDefault();
      toggleBeer(beerId);
    }
  };

  return (
    <ul className={css.list}>
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
