import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../utils/fetches";

const AnimeDetails = () => {
  const [anime, setAnime] = useState({});
  const params = useParams();

  const getAndSetAnime = async () => {
    const getAnime = await getAnimeById(params.id);
    setAnime(getAnime);
  };

  useEffect(() => {
    getAndSetAnime();
  }, []);

  return (
    <div>
      {anime.attributes && (
        <div>
          <div>
            <h1>{anime.attributes.titles.en}</h1>
            <h2>{anime.attributes.subtype}</h2>
          </div>
          <div>
            <img src={anime.attributes.posterImage.original} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
