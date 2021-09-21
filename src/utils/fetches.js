import axios from "axios";

const headers = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
};

export const getTrendingAnime = async () => {
  try {
    const trendingCall = await axios.get(
      "https://kitsu.io/api/edge/trending/anime?[limit]=5",
      {
        headers: headers,
      }
    );
    return trendingCall.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPopular = async () => {
  try {
    const popularCall = await axios.get(
      "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=5",
      {
        headers: headers,
      }
    );
    return popularCall.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRanked = async () => {
  try {
    const rankedCall = await axios.get(
      "https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=5",
      {
        headers: headers,
      }
    );
    return rankedCall.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async () => {
  try {
    const categoriesCall = await axios.get(
      "https://kitsu.io/api/edge/categories?page[limit]=229",
      {
        headers: headers,
      }
    );
    const catArray = categoriesCall.data.data;
    const mainCatArray = catArray.filter((cat) => {
      return cat.attributes.childCount > 3;
    });
    return mainCatArray;
  } catch (err) {
    console.log(err);
  }
};

export const getCategoryAnime = async (category) => {
  try {
    const getAnimeByCat = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[categories]=${category}&page[limit]=20&page[offset]=0`,
      {
        headers: headers,
      }
    );
    return getAnimeByCat.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAnimeById = async (id) => {
  try {
    const getById = await axios.get(`https://kitsu.io/api/edge/anime/${id}`, {
      headers: headers,
    });
    console.log(getById.data);
    return getById.data.data;
  } catch (err) {
    console.log(err);
  }
};
