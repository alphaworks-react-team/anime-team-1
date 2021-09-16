import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardContainer } from '../fragments/Container'
import Card from './Card'

const HomeListComponent = () => {
  const [ trending, setTrending ] = useState([])

  const searchTrendingAnime = () => {
    axios
      .get('https://kitsu.io/api/edge/trending/anime?[limit]=5', {
        headers: {
          "Accept": "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      })
      .then((res) => {
        const data = res.data.data
        setTrending(data);
      })
      .catch((err) => {console.log(err)})
  }
  console.log(trending)
  useEffect(() => {
    searchTrendingAnime()
  }, [])

  return (
    <CardContainer>
      {trending.map((card, index) => (
        <Card key={index}
          img={card.attributes.posterImage.small}
          title={card.attributes.titles.en}
          >
        </Card>
      ))}
    </CardContainer>
  )
}

export default HomeListComponent
