import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getCategories } from "../utils/fetches";
import { Link } from "react-router-dom";

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
`;

const NavText = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;

  &:hover {
    color: #ffbf00;
  }
`;

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchAndSetCategories = async () => {
    const getCat = await getCategories();
    setCategories(getCat);
    console.log("cats", getCat);
    console.log("state", categories);
  };

  useEffect(() => {
    fetchAndSetCategories();
  }, []);

  return (
    <NavContainer>
      <Link to={"/"}>
        <NavText>Home</NavText>
      </Link>
      <Link to={"/trending"}>
        <NavText>Trending</NavText>
      </Link>
      <NavText
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Categories
      </NavText>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((cat, index) => (
          <>
            <MenuItem key={index} onClick={handleClose}>
              {cat.attributes.title}
            </MenuItem>
          </>
        ))}
      </Menu>
    </NavContainer>
  );
};

export default Nav;
