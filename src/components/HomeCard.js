import React from "react";
import { useHistory } from "react-router-dom";
import HomeAnimeCard from "../fragments/HomeAnimeCard";
import CardImage from "../fragments/CardImage";
import CardDetails from "../fragments/CardDetails";

const HomeCard = (props) => {
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

export default HomeCard;
