import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  margin: 0;
  padding: 0;
  height: 45px;
  width: 300px;
  outline: none;
  border: none;
  background: none;
  font-size: 25px;
`

const Button = styled.button`
  color: gray;
  font-size: 25px;
  height: 45px;
  width: 60px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
`

const SearchComponent = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.searchAnime(searchTerm)
  }

  return (
    <Container onSubmit={onSubmit}>
      <Input onChange={onChange} placeholder="Search Anime"/>
      <Button type='submit'>Search</Button>
    </Container>
  )
}

export default SearchComponent
