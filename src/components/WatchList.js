import React, { useContext } from "react";
import { WatchlistContext } from "../Context/WatchlistContext";
import { HomeListContainer } from "../fragments/HomeListContainer";
import HomeCard from "./HomeCard";

const WatchList = (props) => {
  const { watchlist } = useContext(WatchlistContext);
  return (
    <div>
      <h2>Watchlist</h2>
      {watchlist ? (
        <HomeListContainer>
          {watchlist.map((anime, index) => (
            <HomeCard
              key={index}
              img={anime.attributes.posterImage.small}
              title={anime.attributes.titles.en}
              id={anime.id}
            ></HomeCard>
          ))}
        </HomeListContainer>
      ) : (
        <h1>Add Anime to Your Watchlist</h1>
      )}
    </div>
  );
};

export default WatchList;
