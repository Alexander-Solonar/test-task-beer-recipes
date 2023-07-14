import axios from "axios";

export const getListOfBeer = async (page = 1) => {
  const response =
    await axios.get(`https://api.punkapi.com/v2/beers?page=${page}
  `);
  return response.data;
};

export const getSingleBeer = async (beerId) => {
  const response = await axios.get(
    `https://api.punkapi.com/v2/beers/${beerId}`
  );
  return response.data;
};
