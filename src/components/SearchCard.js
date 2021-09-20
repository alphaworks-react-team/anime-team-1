import React from 'react'
import AnimeCard from '../fragments/AnimeCard'
import CardImage from '../fragments/CardImage'
import CardDetails from '../fragments/CardDetails'

const SearchCard = (props) => {
  return (
    <AnimeCard>
      <CardImage src={props.img}/>
      <CardDetails>
        <h2>{props.title}</h2>
        <h3>{props.ageRating}</h3>
        <h3>Rating: {props.averageRating}</h3>
        <div>{props.synopsis}</div>
      </CardDetails>
    </AnimeCard>
  )
}

export default SearchCard
