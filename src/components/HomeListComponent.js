import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../fragments/Container";
import { getTrendingAnime, getPopular, getRanked } from "../utils/fetches";
import Card from "./Card";

const HomeListComponent = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [highestRanked, setHighestRanked] = useState([]);

  const fetchAndSetTrending = async () => {
    const res = await getTrendingAnime();
    const data = await res;
    setTrending(data);
  };
  const fetchAndSetPopular = async () => {
    const res = await getPopular();
    const data = await res;
    setPopular(data);
  };
  const fetchAndSetRanked = async () => {
    const res = await getRanked();
    const data = await res;
    setHighestRanked(data);
  };

  useEffect(() => {
    fetchAndSetTrending();
    fetchAndSetPopular();
    fetchAndSetRanked();
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
