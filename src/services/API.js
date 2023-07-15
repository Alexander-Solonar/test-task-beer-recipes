import axios from "axios";

export const getListOfBeer = async (page) => {
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

export const getNextFiveBeer = async (page) => {
  const response =
    await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=5
  `);
  return response.data;
};
