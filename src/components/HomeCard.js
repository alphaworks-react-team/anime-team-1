import React from 'react'
import HomeAnimeCard from '../fragments/HomeAnimeCard'
import CardImage from '../fragments/CardImage'
import CardDetails from '../fragments/CardDetails'

const HomeCard = (props) => {
  return (
    <HomeAnimeCard>
      <CardImage src={props.img}/>
      <CardDetails>
        <h2>{props.title}</h2>
        <div>{props.synopsis}</div>
      </CardDetails>
    </HomeAnimeCard>
  )
}

export default HomeCard