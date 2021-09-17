import axios from "axios";

export const getTrendingAnime = async () => {
  try {
    const trendingCall = await axios.get(
      "https://kitsu.io/api/edge/trending/anime?[limit]=5",
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      }
    );
    console.log(trendingCall.data.data);
    return trendingCall.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getPopular = async () => {
  try {
    const popularCall = await axios.get(
      "https://kitsu.io/api/edge/anime?sort=popularityRank",
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      }
    );
    console.log("popular", popularCall.data.data);
    return popularCall.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getRanked = async () => {
  try {
    const rankedCall = await axios.get(
      "https://kitsu.io/api/edge/anime?sort=ratingRank",
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      }
    );
    console.log("ranked", rankedCall.data.data);
    return rankedCall.data.data;
  } catch (err) {
    console.log(err);
  }
};
