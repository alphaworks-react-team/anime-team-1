import React, { useEffect } from 'react'
import axios from 'axios'

const HomeListComponent = () => {
  const searchTrendingAnime = () => {
    axios
      .get('https://kitsu.io/api/edge/trending/anime?[limit]=5', {
        headers: {
          "Accept": "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    searchTrendingAnime()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default HomeListComponent
