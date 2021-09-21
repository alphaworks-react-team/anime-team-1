import React, { useState } from "react";
import AnimeCard from "../fragments/AnimeCard";
import CardImage from "../fragments/CardImage";
import CardDetails from "../fragments/CardDetails";
import TrailerBtn from '../fragments/TrailerBtn';
import Modal from "./Modal";

const SearchCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimeCard>
        <CardImage src={props.img} />
        <CardDetails>
          <h2>{props.title}</h2>
          <h3>{props.ageRating}</h3>
          <h3>Rating: {props.averageRating}</h3>
          {props.videoId && (
            <TrailerBtn
              onClick={() => setModalOpen(true)}
            >
              Trailer
            </TrailerBtn>
          )}
          <div>{props.synopsis}</div>
        </CardDetails>
      </AnimeCard>
      {modalOpen && <Modal videoId={props.videoId} />}
    </>
  );
};

export default SearchCard;
