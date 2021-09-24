import React, { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../utils/fetches";
import { getAnimeStreamLinksById } from "../utils/fetches";
import { getAnimeEpisodesById } from "../utils/fetches";
// import { getRelatedAnime } from "../utils/fetches";

import TrailerBtn from "../fragments/TrailerBtn";
import Banner from "../fragments/Banner";
import DetailsContainer from "../fragments/DetailsContainer";
import Modal from "../components/Modal";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteBtn from "../fragments/FavoriteBtn";
import { WatchlistContext } from "../Context/WatchlistContext";
import EpImage from "../fragments/EpImage";
import AnimeDetailsContainer from "../fragments/AnimeDetailsContainer";
import CardDetails from "../fragments/CardDetails";
import EpContainer from "../fragments/EpContainer";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const AnimeDetails = () => {
  const [anime, setAnime] = useState({});
  const [animeLinks, setAnimeLinks] = useState([]);
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  // const [relatedAnime, setRelatedAnime] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const { addAnimeToWatchlist } = useContext(WatchlistContext);

  const getAndSetAnime = async () => {
    const getAnime = await getAnimeById(params.id);
    const getAnimeLinks = await getAnimeStreamLinksById(params.id);
    const getAnimeEps = await getAnimeEpisodesById(params.id);
    // const getRelated = await getRelatedAnime(anime.attributes.titles.en);
    setAnime(getAnime);
    setAnimeLinks(getAnimeLinks);
    setAnimeEpisodes(getAnimeEps);
    // setRelatedAnime(getRelated);
  };

  useEffect(() => {
    (async function () {
      getAndSetAnime();
    })();
  }, []);

  const dateChanger = (string) => {
    return dayjs(string).format("MM/DD/YYYY");
  };

  return (
    <AnimeDetailsContainer>
      {anime.attributes && (
        <div>
          <Banner>
            <img src={anime.attributes.coverImage.small} alt="" />
          </Banner>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DetailsContainer>

                {/* Left div container */}
                <div style={{ height: "100%" }}> 
                  <img
                    src={anime.attributes.posterImage.small}
                    alt=""
                  />
                  <div
                    style={{
                    display: "flex",
                    flexFlow: "column",
                  }}
                  >
                    <h3>Links to Watch at:</h3>
                    {animeLinks.length > 1 &&
                      animeLinks[0].map((links, index) => (
                        <a href={animeLinks[1][index]}>
                          <TrailerBtn>{links}</TrailerBtn>
                        </a>
                      ))}
                  </div>
                </div>
                {/* Left div container */}
                
              {/* Middle details */}
              <CardDetails>
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                {anime.attributes.nextRelease && (
                  <h4>
                    Next Episode: {dateChanger(anime.attributes.nextRelease)}
                  </h4>
                )}
                </div>
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
                  <FavoriteBtn onClick={() => addAnimeToWatchlist(anime)}>
                    Add to Watchlist
                  </FavoriteBtn>
                </div>
              </CardDetails>
              {/* Middle details */}

              {/* Right Episodes div */}
              <EpContainer>
                {animeEpisodes &&
                  animeEpisodes.map((episode) => (
                    <div>
                      <h4>
                        Season {episode.attributes.seasonNumber} Episode{" "}
                        {episode.attributes.number}
                      </h4>
                      {/* <p>
                        {episode.attributes.titles.en
                          ? episode.attributes.titles.en
                          : episode.attributes.titles.en_jp}
                      </p> */}
                      <EpImage src={episode.attributes.thumbnail.original} alt=""/>
                    </div>
                  ))}
              </EpContainer>
              {/* Right Episodes div */}

              
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
    </AnimeDetailsContainer>
  );
};

export default AnimeDetails;
