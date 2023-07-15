import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as API from "../services/API";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await API.getSingleBeer(recipeId);
        setRecipe(response);
      } catch {}
    })();
  }, [recipeId]);

  return (
    <div>
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
