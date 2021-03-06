import React, { useState, useEffect } from "react";
import { HomeListContainer } from "../fragments/HomeListContainer";
import {
  getTrendingAnime,
  getPopular,
  getRanked,
  getCategories,
} from "../utils/fetches";
import HomeCard from "./HomeCard";

const HomeListComponent = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [highestRanked, setHighestRanked] = useState([]);

  const fetchAndSetLists = async () => {
    try {
      const trendingRes = await getTrendingAnime();
      setTrending(trendingRes);
      const popularRes = await getPopular();
      setPopular(popularRes);
      const rankedRes = await getRanked();
      setHighestRanked(rankedRes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAndSetLists();
    getCategories();
  }, []);

  return (
    <div>
      <h1>Trending Shows</h1>
      <HomeListContainer>
        {trending.map((card, index) => (
          <HomeCard
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
            id={card.id}
          ></HomeCard>
        ))}
      </HomeListContainer>
      <hr />
      <h1>Popular Shows</h1>
      <HomeListContainer>
        {popular.map((card, index) => (
          <HomeCard
            key={index}
            img={card.attributes.posterImage.small}
            title={
              card.attributes.titles.en
                ? card.attributes.titles.en
                : card.attributes.titles.en_jp
            }
            id={card.id}
          ></HomeCard>
        ))}
      </HomeListContainer>
      <hr />
      <h1>Highest Rated</h1>
      <HomeListContainer>
        {highestRanked.map((card, index) => (
          <HomeCard
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
            id={card.id}
          ></HomeCard>
        ))}
      </HomeListContainer>
    </div>
  );
};

export default HomeListComponent;
