import React, { useState, useContext } from "react";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { CategoryContext } from "../Context/CategoryContext";
import { useHistory } from "react-router";

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
  text-decoration: none;

  &:hover {
    color: #ffbf00;
  }
`;

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { categories, setSelectedCategory } = useContext(CategoryContext);
  const history = useHistory();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat.attributes.title);
    setAnchorEl(null);
    history.push("/categories");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer>
      <Link to={"/"}>
        <NavText>Home</NavText>
      </Link>
      <Link to={"/watchlist"}>
        <NavText>Watchlist</NavText>
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
          <MenuItem key={index} onClick={() => handleCategorySelect(cat)}>
            {cat.attributes.title}
          </MenuItem>
        ))}
      </Menu>
    </NavContainer>
  );
};

export default Nav;
