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
    if (watchlist.length == 0) {
      watchlist.push(anime);
    } else {
      const watchlistAnimes = [...watchlist, anime];
      setWatchlist(watchlistAnimes);
      saveToLocalStorage(watchlistAnimes);
    }
  };

  // const addFavGif = (image, id) => {
  //   const favsCopy = [...favGif];
  //   const existingIds = favsCopy.map((favs) => favs.id);
  //   if (!existingIds.includes(id)) {
  //     favsCopy.push({ image: image, id: id });
  //     localStorage.setItem("favs", JSON.stringify(favsCopy));
  //     setFavGif(favsCopy);
  //   } else {
  //     const newFavs = favsCopy.filter((favs) => favs.id !== id);
  //     localStorage.setItem("favs", JSON.stringify(newFavs));
  //     setFavGif(newFavs);
  //   }
  // };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, setWatchlist, addAnimeToWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export { WatchlistContext, WatchlistProvider };
