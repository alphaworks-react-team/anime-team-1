import React from 'react'
import styled from 'styled-components'

const AnimeCard = styled.div`
  height: 20%;
  width: 50%;
  margin: 1rem;
  display: flex;
  flex-flow: row;
  color: #3d3c72;

  &:hover {
    background: #3d3c72;
    color: white;
  }
`
const CardDetails = styled.span`
  text-align: left;
  margin-left: 1rem;
`

const CardTitle = styled.h2`
  /* color: black; */
`

const CardImage = styled.img`
  width: 100%;
`

const Card = (props) => {
  return (
    <AnimeCard>
      <CardImage src={props.img}/>
      <CardDetails>
        <CardTitle>{props.title}</CardTitle>
        <h3>{props.ageRating}</h3>
        <h3>Rating: {props.averageRating}</h3>
        <div>{props.synopsis}</div>
      </CardDetails>
    </AnimeCard>
  )
}

export default Card
