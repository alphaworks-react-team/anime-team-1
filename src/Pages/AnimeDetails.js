import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import {
  getAnimeById,
  getAnimeStreamLinksById,
  getAnimeEpisodesById,
  getRelatedAnime,
} from "../utils/fetches";

import SearchCard from "../components/SearchCard";
import { SearchCardContainer } from "../fragments/SearchCardContainer";
import TrailerBtn from "../fragments/TrailerBtn";
import Banner from "../fragments/Banner";
import DetailsContainer from "../fragments/DetailsContainer";
import FavoriteBtn from "../fragments/FavoriteBtn";
import Modal from "../components/Modal";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { WatchlistContext } from "../Context/WatchlistContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabContainer = styled.div`
  width: 100%;
`;

export const AnimeDetails = () => {
  const [anime, setAnime] = useState([]);
  const [animeLinks, setAnimeLinks] = useState([]);
  const [animeEpisodes, setAnimeEpisodes] = useState([]);
  const [relatedAnime, setRelatedAnime] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const { addAnimeToWatchlist } = useContext(WatchlistContext);

  const getAndSetAnime = async () => {
    const getAnime = await getAnimeById(params.id);
    const getAnimeLinks = await getAnimeStreamLinksById(params.id);
    const getAnimeEps = await getAnimeEpisodesById(params.id);
    setAnime(getAnime);
    setAnimeLinks(getAnimeLinks);
    setAnimeEpisodes(getAnimeEps);
  };

  useEffect(() => {
    (async function () {
      getAndSetAnime();
    })();
  }, []);

  const relatedClick = async () => {
    const getRelated = await getRelatedAnime(anime.attributes.titles.en);
    setRelatedAnime(getRelated);
  };

  const dateChanger = (string) => {
    return dayjs(string).format("MM/DD/YYYY");
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      {anime.attributes && (
        <div>
          <Banner>
            <img src={anime.attributes.coverImage.small} alt="" />
          </Banner>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DetailsContainer>
              <TabContainer>
                <Tabs defaultIndex={0} onSelect={() => relatedClick()}>
                  <TabList>
                    <Tab>Info</Tab>
                    <Tab>Episodes</Tab>
                    <Tab>Related</Tab>
                  </TabList>
                  <TabPanel>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ display: "flex" }}>
                        <div style={{ height: "100%" }}>
                          <img
                            style={{ maxHeight: "60%" }}
                            src={anime.attributes.posterImage.small}
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
                                <a key={index} href={animeLinks[1][index]}>
                                  <TrailerBtn>{links}</TrailerBtn>
                                </a>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div style={{ margin: "1rem" }}>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <h1 style={{ margin: "0px", color: "#3d3c72" }}>
                            {anime.attributes.titles.en
                              ? anime.attributes.titles.en
                              : anime.attributes.titles.en_jp}
                          </h1>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <h4>Show Type: ({anime.attributes.subtype})</h4>
                          <h4>Rated: {anime.attributes.ageRating}</h4>
                          <h4>Started on: {anime.attributes.startDate}</h4>
                          <h4>Status: {anime.attributes.status}</h4>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <h4 style={{ color: "#f16246" }}>
                            <FcLike /> Rank #{anime.attributes.popularityRank}{" "}
                            Most Popular
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
                            Next Episode:{" "}
                            {dateChanger(anime.attributes.nextRelease)}
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
                          <FavoriteBtn
                            onClick={() => addAnimeToWatchlist(anime)}
                          >
                            Add to Watchlist
                          </FavoriteBtn>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexFlow: "column",
                      }}
                    >
                      {animeEpisodes &&
                        animeEpisodes.map((episode, index) => (
                          <div key={index}>
                            <div
                              style={{
                                display: "flex",
                                flexFlow: "row",
                                height: "",
                              }}
                            >
                              <div>
                                <h4>
                                  Season {episode.attributes.seasonNumber}{" "}
                                  Episode {episode.attributes.number}
                                </h4>
                                <h4>
                                  {episode.attributes.titles.en
                                    ? episode.attributes.titles.en
                                    : episode.attributes.titles.en_jp}
                                </h4>
                                <div>
                                  <img
                                    style={{ height: "15rem" }}
                                    src={episode.attributes.thumbnail.original}
                                  ></img>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  textAlign: "left",
                                  marginLeft: "1rem",
                                }}
                              >
                                <p style={{ fontSize: "20px" }}>
                                  {episode.attributes.synopsis}
                                </p>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))}
                    </div>
                  </TabPanel>
                  <TabPanel onSelect={() => relatedClick()}>
                    {relatedAnime.length > 2 && (
                      <SearchCardContainer>
                        {relatedAnime.map((anime, index) => (
                          <SearchCard
                            key={index}
                            img={anime.attributes.posterImage.small}
                            title={anime.attributes.titles.en}
                            ageRating={anime.attributes.ageRating}
                            averageRating={anime.attributes.averageRating}
                            synopsis={anime.attributes.synopsis}
                            videoId={anime.attributes.youtubeVideoId}
                            type={anime.attributes.subtype}
                            id={anime.id}
                          ></SearchCard>
                        ))}
                      </SearchCardContainer>
                    )}
                  </TabPanel>
                </Tabs>
              </TabContainer>
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
