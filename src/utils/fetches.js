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
// fetches all 229 categories, filters out if childCount < 3
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

export const getCategoryAnime = async (category, sortBy, offset) => {
  try {
    const getAnimeByCat = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[categories]=${category}&sort=${sortBy}&page[limit]=12&page[offset]=${offset}`,
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
    return getById.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAnimeEpisodesById = async (id) => {
  try {
    const getById = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/episodes`,
      {
        headers: headers,
      }
    );
    // console.log(getById.data.data)
    return getById.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAnimeStreamLinksById = async (id) => {
  try {
    const getById = await axios.get(
      `https://kitsu.io/api/edge/anime/${id}/streaming-links`,
      {
        headers: headers,
      }
    );
    const streamerList = await getById.data.data;
    const streamUrls = streamerList.map((data) => {
      return data.attributes.url;
    });
    return Promise.all(
      streamerList.map((streamer, index) => {
        return axios.get(streamer.relationships.streamer.links.related);
      })
    ).then((streamers) => {
      const streamersData = streamers.map((streamer, index) => {
        return streamer.data.data.attributes.siteName;
      });
      console.log([streamersData, streamUrls]);
      return [streamersData, streamUrls];
    });
  } catch (err) {
    console.log(err);
  }
};

export const getRelatedAnime = async (title) => {
  try {
    const result = await axios.get(
      `https://kitsu.io/api/edge/anime/?filter[text]=${title}&page[limit]=20`,
      {
        headers: headers,
      }
    );
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};
