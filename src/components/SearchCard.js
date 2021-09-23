import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnimeCard from "../fragments/AnimeCard";
import CardImage from "../fragments/CardImage";
import CardDetails from "../fragments/CardDetails";
import TrailerBtn from "../fragments/TrailerBtn";
import Modal from "./Modal";

const SearchCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <AnimeCard>
        <CardImage
          src={props.img}
          onClick={() => history.push(`/anime/${props.id}`)}
        />
        <CardDetails>
          <h2>
            {props.title} ({props.type})
          </h2>
          <h3>{props.ageRating}</h3>
          <h3>Rating: {props.averageRating}</h3>
          {props.videoId && (
            <TrailerBtn onClick={() => setModalOpen(true)}>Trailer</TrailerBtn>
          )}
          <div>{props.synopsis}</div>
        </CardDetails>
      </AnimeCard>
      {modalOpen && <Modal videoId={props.videoId} />}
    </>
  );
};

export default SearchCard;
