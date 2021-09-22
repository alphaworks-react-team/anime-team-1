import React from "react";
import { useHistory } from "react-router-dom";
import CardDetails from "../fragments/CardDetails";
import CardImage from "../fragments/CardImage";
import HomeAnimeCard from "../fragments/HomeAnimeCard";

const CategoryCard = (props) => {
  const history = useHistory();

  return (
    <HomeAnimeCard>
      <CardImage
        src={props.img}
        onClick={() => history.push(`/anime/${props.id}`)}
      />
      <CardDetails>
        <h2>{props.title}</h2>
        <div>{props.synopsis}</div>
      </CardDetails>
    </HomeAnimeCard>
  );
};

export default CategoryCard;
