import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  height: 10vh;
  width: 100%;
  background: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  position: sticky;
`

const NavText = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
`


const Nav = () => {
  return (
    <NavContainer>
      <NavText>Home</NavText>
      <NavText>Trending</NavText>
      <NavText>Categories</NavText>
    </NavContainer>
  )
}

export default Nav
