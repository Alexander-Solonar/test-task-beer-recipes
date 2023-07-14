import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import * as API from "../services/API";

const Recipe = () => {
  const { recipeId } = useParams();
  const [one, setOne] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await API.getSingleBeer(recipeId);
        setOne(response);
      } catch {}
    })();
  }, [recipeId]);

  return (
    <div>
      {one.length > 0 && (
        <div>
          <h2>{one[0].name}</h2>
          <p>{one[0].brewers_tips}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
