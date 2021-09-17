import React from "react";
import Card from "../components/Card";
import { SearchCardContainer } from "../fragments/SearchCardContainer";

const Search = ({ searchContent }) => {
  return (
    <SearchCardContainer>
      {searchContent.map((card, index) => (
        <Card
          key={index}
          img={card.attributes.posterImage.small}
          title={card.attributes.titles.en}
          description={card.attributes.description}
        ></Card>
      ))}
    </SearchCardContainer>
  );
};

export default Search;
