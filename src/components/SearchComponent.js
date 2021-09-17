import React, { useState } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 13vh;
  background: white;
`

const Input = styled.input`
  height: 3.5rem;
  width: 40%;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  background: none;
  font-size: 25px;
`

const Button = styled.button`
  color: white;
  font-size: 25px;
  height: 3.5rem;
  outline: none;
  border: none;
  background: #f16246;
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
    <SearchContainer onSubmit={onSubmit}>
      <Input onChange={onChange} placeholder="Search Anime"/>
      <Button type='submit'>Search</Button>
    </SearchContainer>
  )
}

export default SearchComponent
