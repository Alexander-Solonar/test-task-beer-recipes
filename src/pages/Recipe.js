import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../services/API";
import { useBeerStore } from "../zustand/store";
import Loader from "../components/loader/Loader";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();
  const isLoader = useBeerStore((state) => state.isLoader);
  const setOnLoader = useBeerStore((state) => state.setOnLoader);
  const setOffLoader = useBeerStore((state) => state.setOffLoader);

  useEffect(() => {
    (async () => {
      try {
        setOnLoader();
        const response = await API.getSingleBeer(recipeId);
        setRecipe(response);
        setOffLoader();
      } catch (error) {
        setOffLoader();
        alert(error.message);
      }
    })();
  }, [recipeId, setOffLoader, setOnLoader]);

  return (
    <div>
      {isLoader && <Loader />}
      {recipe.length > 0 && (
        <div>
          <h2>{recipe[0].name}</h2>
          <p>{recipe[0].brewers_tips}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
