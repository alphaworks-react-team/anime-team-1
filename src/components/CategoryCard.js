import React from "react";
import CardDetails from "../fragments/CardDetails";
import CardImage from "../fragments/CardImage";
import HomeAnimeCard from "../fragments/HomeAnimeCard";

const CategoryCard = (props) => {
  return (
    <HomeAnimeCard>
      <CardImage src={props.img}/>
      <CardDetails>
        <h2>{props.title}</h2>
        <div>{props.synopsis}</div>
      </CardDetails>
    </HomeAnimeCard>
  );
};

export default CategoryCard;
