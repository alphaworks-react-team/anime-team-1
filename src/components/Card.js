import React from 'react'
import styled from 'styled-components'

const AnimeCard = styled.div`
  height: 20%;
  width: 20%;
  margin: 1rem;

  &:hover {
    background: #3d3c72;
    color: white;
  }
`

const CardTitle = styled.h2`
  /* color: black; */
`

const CardImage = styled.img`
  width: 100%;
`

const CardDescription = styled.div`
  height: 10rem;
  overflow: scroll;
`

const Card = (props) => {
  return (
    <AnimeCard>
      <CardImage src={props.img}/>
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </AnimeCard>
  )
}

export default Card
