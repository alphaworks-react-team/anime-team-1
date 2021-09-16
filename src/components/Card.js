import React from 'react'
import styled from 'styled-components'

const AnimeCard = styled.div`
  margin: 1rem;
`

const CardTitle = styled.div`
  color: black;
`

const CardImage = styled.img`
  /* height: 4rem;
  width: 90%; */
`

const Card = (props) => {
  return (
    <AnimeCard>
      <CardImage src={props.img}/>
      <CardTitle>{props.title}</CardTitle>
    </AnimeCard>
  )
}

export default Card
