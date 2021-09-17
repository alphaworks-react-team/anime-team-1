import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../fragments/Container";
import { getTrendingAnime, getPopular, getRanked } from "../utils/fetches";
import Card from "./Card";

const HomeListComponent = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [highestRanked, setHighestRanked] = useState([]);

  const fetchAndSetLists = async () => {
    try {
      const trendingRes = await getTrendingAnime();
      const trendingData = await trendingRes;
      setTrending(trendingData);
      const popularRes = await getPopular();
      const popularData = await popularRes;
      setPopular(popularData);
      const rankedRes = await getRanked();
      const rankedData = await rankedRes;
      setHighestRanked(rankedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAndSetLists();
  }, []);

  return (
    <div>
      <Container>
        {trending.map((card, index) => (
          <Card
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
          ></Card>
        ))}
      </Container>
      <Container>
        {popular.map((card, index) => (
          <Card
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
          ></Card>
        ))}
      </Container>
      <Container>
        {highestRanked.map((card, index) => (
          <Card
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
          ></Card>
        ))}
      </Container>
    </div>
  );
};

export default HomeListComponent;
