import React from 'react'
import { Link } from 'react-router-dom';
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
  background: #3d3c72;
`

const NavText = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    color: #FFBF00;
  }
`

const Nav = () => {
  return (
    <NavContainer>
      <Link to={'/'}><NavText>Home</NavText></Link>
      <Link to={'/trending'}><NavText>Trending</NavText></Link>
      <NavText>Categories</NavText>
    </NavContainer>
  )
}

export default Nav
