import React from "react";
import SearchCard from "../components/SearchCard";
import { SearchCardContainer } from "../fragments/SearchCardContainer";

const Search = ({ searchContent }) => {
  return (
    <SearchCardContainer>
      {searchContent.map((card, index) => (
        <>
          <SearchCard
            key={index}
            img={card.attributes.posterImage.small}
            title={card.attributes.titles.en}
            ageRating={card.attributes.ageRating}
            averageRating={card.attributes.averageRating}
            synopsis={card.attributes.synopsis}
            videoId={card.attributes.youtubeVideoId}
            id={card.id}
          ></SearchCard>
        </>
      ))}
    </SearchCardContainer>
  );
};

export default Search;
