import { useBeerStore } from "../../zustand/store";
import css from "./Header.module.css";

const Header = () => {
  const collectionBeers = useBeerStore((state) => state.collectionBeers);
  const deleteSelected = useBeerStore((state) => state.deleteSelected);
  const setDisplayedBeers = useBeerStore((state) => state.setDisplayedBeers);

  const total = collectionBeers.reduce((counter, element) => {
    if (element.selected) {
      counter += 1;
    }
    return counter;
  }, 0);

  const handleDeleteSelected = () => {
    deleteSelected();
    setDisplayedBeers();
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1 className={css.title}>Beer Collection</h1>
        {total > 0 && (
          <button className={css.button} onClick={handleDeleteSelected}>
            Delete ({total} el)
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
