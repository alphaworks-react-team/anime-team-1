import React, { useState, useEffect } from "react";
import { HomeListContainer } from "../fragments/HomeListContainer";
import { getTrendingAnime, getPopular, getRanked } from "../utils/fetches";
import HomeCard from "./HomeCard";

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
      <h2>Trending Shows</h2>
      <HomeListContainer>
        {trending.map((card, index) => (
          <HomeCard key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
            // ageRating={card.attributes.ageRating}
            // averageRating={card.attributes.averageRating}
            // synopsis={card.attributes.synopsis}
          >
          </HomeCard>
        ))}
      </HomeListContainer>
      <hr/>
      <h2>Popular Shows</h2>
      <HomeListContainer>
        {popular.map((card, index) => (
          <HomeCard key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
            // ageRating={card.attributes.ageRating}
            // averageRating={card.attributes.averageRating}
            // synopsis={card.attributes.synopsis}
          >
          </HomeCard>
        ))}
      </HomeListContainer>
      <hr/>
      <h2>Highest Rated</h2>
      <HomeListContainer>
        {highestRanked.map((card, index) => (
          <HomeCard key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
            // ageRating={card.attributes.ageRating}
            // averageRating={card.attributes.averageRating}
            // synopsis={card.attributes.synopsis}
          >
          </HomeCard>
        ))}
      </HomeListContainer>
    </div>
  );
};

export default HomeListComponent;
