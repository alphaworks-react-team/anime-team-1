import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 1.5rem 0;
  position: sticky;
  top: 10vh;
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

  let history = useHistory();

  return (
    <SearchContainer onSubmit={onSubmit}>
      <Input onChange={onChange} placeholder="Search Anime"/>
      <Button type='submit' onClick={() => { history.push('/search')}}>Search</Button>
    </SearchContainer>
  )
}

export default SearchComponent
