import React, { createContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("anime", JSON.stringify(items));
  };

  useEffect(() => {
    const animesToWatch = JSON.parse(localStorage.getItem("anime"));
    if (watchlist == null) {
      setWatchlist([]);
      localStorage.setItem("anime", JSON.stringify([]));
    } else {
      setWatchlist(animesToWatch);
    }
  }, []);

  const addAnimeToWatchlist = (anime) => {
    if (watchlist == null) {
      setWatchlist([anime]);
    } else {
      const watchlistAnimes = [...watchlist, anime];
      setWatchlist(watchlistAnimes);
      alert("Anime added to watchlist");
      saveToLocalStorage(watchlistAnimes);
    }
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, setWatchlist, addAnimeToWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export { WatchlistContext, WatchlistProvider };
