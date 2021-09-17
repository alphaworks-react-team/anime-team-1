import React, { useState, useEffect } from "react";
import { HomeListContainer } from "../fragments/HomeListContainer";
import {
  getTrendingAnime,
  getPopular,
  getRanked,
  getCategories,
} from "../utils/fetches";
import Card from "./Card";

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
      <HomeListContainer>
        {trending.map((card, index) => (
          <Card
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
          ></Card>
        ))}
      </HomeListContainer>
      <HomeListContainer>
        {popular.map((card, index) => (
          <Card
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
          ></Card>
        ))}
      </HomeListContainer>
      <HomeListContainer>
        {highestRanked.map((card, index) => (
          <Card
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
          ></Card>
        ))}
      </HomeListContainer>
    </div>
  );
};

export default HomeListComponent;
