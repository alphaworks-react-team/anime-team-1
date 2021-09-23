import React, { createContext, useState } from 'react'

const WatchlistContext = createContext()

const WatchlistProvider = ({children}) => {
  const [watchlist, setWatchlist] = useState([])

  const addAnimeToWatchlist = (anime) => {
    const watchlistAnimes = [...watchlist, anime]
    setWatchlist(watchlistAnimes)
  }

  return (
    <WatchlistContext.Provider
      value={{watchlist, setWatchlist, addAnimeToWatchlist}}
    >
      {children}
    </WatchlistContext.Provider>
  )
}

export {WatchlistContext, WatchlistProvider}
