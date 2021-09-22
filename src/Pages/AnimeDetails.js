import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";
import { getAnimeById } from "../utils/fetches";

import AnimeCard from "../fragments/AnimeCard";
import CardDetails from "../fragments/CardDetails";
import CardImage from "../fragments/CardImage";
import TrailerBtn from "../fragments/TrailerBtn";
import { SearchCardContainer } from "../fragments/SearchCardContainer";

import Modal from '../components/Modal';

export const AnimeDetails = () => {
  const [anime, setAnime] = useState({});
  const params = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const getAndSetAnime = async () => {
    const getAnime = await getAnimeById(params.id);
    setAnime(getAnime);
  } ;

  useEffect(() => {
    getAndSetAnime();
  }, []);

  const dateChanger = (string) => {
    return (dayjs(string).format('MM/DD/YYYY'));
  }

  console.log(anime)

  return (
    <SearchCardContainer>
      {anime.attributes && (
        <AnimeCard>
          <CardImage src={anime.attributes.posterImage.small} />
          <CardDetails>
            <h2>{anime.attributes.titles.en}</h2>
            <p>Started on: {anime.attributes.startDate}</p>
            <p>Status: {anime.attributes.status}</p>
            <p>Next Episode: {dateChanger(anime.attributes.nextRelease)}</p>
            <p>Rated: {anime.attributes.ageRating}</p>
            <p>Popular Rank: {anime.attributes.averageRating}</p>
            {anime.attributes.youtubeVideoId && (
              <TrailerBtn
                onClick={() => setModalOpen(true)}
              >
                Trailer
              </TrailerBtn>
            )}

            <div>{anime.attributes.synopsis}</div>
          </CardDetails>
        </AnimeCard>
      )}
      {modalOpen && <Modal videoId={anime.attributes.youtubeVideoId} />}
    </SearchCardContainer>
  );
};

export default AnimeDetails;