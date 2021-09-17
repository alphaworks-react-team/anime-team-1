import React from 'react'
import Card from '../components/Card'
import { Container } from '../fragments/Container'

const Search = ({ searchContent }) => {
  return (
    <Container>
      {searchContent.map((card, index) => (
        <Card key={index}
        img={card.attributes.posterImage.small}
        title={card.attributes.titles.en}
        description={card.attributes.description}
        >
      </Card>
      ))}
    </Container>
  )
}

export default Search
