import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
  background: white;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 2;
`

const NavText = styled.div`
  color: #3d3c72;
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
