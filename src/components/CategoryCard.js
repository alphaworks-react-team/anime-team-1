import React from "react";

import styled from "styled-components";

const StyledCategoryCard = styled.div`
  width: 20%;
  margin: 1rem;
  justify-content: center;
  flex-direction: column;
`;
const CategoryCardImg = styled.img`
  width: 100%;
  height: 75%;
`;
const CategoryCardTitle = styled.div`
  width: 100%;
  height: 10%;
`;
const CategoryCardFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CategoryCard = (props) => {
  return (
    <StyledCategoryCard>
      <CategoryCardImg src={props.img} />
      <CategoryCardTitle>
        <h3>{props.title}</h3>
      </CategoryCardTitle>
      <CategoryCardFooter>
        <p>{props.ageRating}</p>
        <p>{props.averageRating}</p>
      </CategoryCardFooter>
    </StyledCategoryCard>
  );
};

export default CategoryCard;
