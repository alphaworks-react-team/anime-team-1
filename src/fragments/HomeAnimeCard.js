import styled from "styled-components";

const HomeAnimeCard = styled.div`
  height: 20%;
  width: 20%;
  margin: 1rem;
  display: flex;
  flex-flow: column;
  color: #3d3c72;
  align-items: center;

  &:hover {
    background: #3d3c72;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export default HomeAnimeCard;
