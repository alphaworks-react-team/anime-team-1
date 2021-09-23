import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../utils/fetches";

import TrailerBtn from "../fragments/TrailerBtn";
import Banner from "../fragments/Banner";
import DetailsContainer from "../fragments/DetailsContainer";
import Modal from "../components/Modal";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

export const AnimeDetails = () => {
  const [anime, setAnime] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const params = useParams();

  const getAndSetAnime = async () => {
    const getAnime = await getAnimeById(params.id);
    setAnime(getAnime);
  };

  useEffect(() => {
    getAndSetAnime();
  }, []);

  const dateChanger = (string) => {
    return dayjs(string).format("MM/DD/YYYY");
  };

  console.log(anime);

  return (
    <div style={{ marginBottom: "10px" }}>
      {anime.attributes && (
        <div>
          <Banner>
            <img src={anime.attributes.coverImage.small} alt="" />
          </Banner>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DetailsContainer>
              <img src={anime.attributes.posterImage.small} />
              <div style={{ margin: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h1 style={{ margin: "0px", color: "#3d3c72" }}>
                    {anime.attributes.titles.en
                      ? anime.attributes.titles.en
                      : anime.attributes.titles.en_jp}
                  </h1>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <h4>Show Type: ({anime.attributes.subtype})</h4>
                  <h4>Rated: {anime.attributes.ageRating}</h4>
                  <h4>Started on: {anime.attributes.startDate}</h4>
                  <h4>Status: {anime.attributes.status}</h4>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <h4 style={{ color: "#f16246" }}>
                    <FcLike /> Rank #{anime.attributes.popularityRank} Most
                    Popular
                  </h4>
                  <h4 style={{ color: "#f16246" }}>
                    <AiFillStar color="gold" /> Rank #
                    {anime.attributes.ratingRank} Highest Rated
                  </h4>
                </div>
                <div style={{ textAlign: "left" }}>
                  {anime.attributes.synopsis}
                </div>
                {anime.attributes.nextRelease && (
                  <h4>
                    Next Episode: {dateChanger(anime.attributes.nextRelease)}
                  </h4>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {anime.attributes.youtubeVideoId && (
                    <TrailerBtn onClick={() => setModalOpen(true)}>
                      Trailer <BsFillPlayFill />
                    </TrailerBtn>
                  )}
                  {/* second button to add to watchlist */}
                  <TrailerBtn>Add to Watchlist</TrailerBtn>
                </div>
              </div>
            </DetailsContainer>
          </div>
        </div>
      )}
      {modalOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "280px",
          }}
        >
          <Modal videoId={anime.attributes.youtubeVideoId} />
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
