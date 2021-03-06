import styled from "styled-components";

const AnimeCard = styled.div`
  height: 20%;
  width: 60%;
  margin: 1rem;
  display: flex;
  flex-flow: row;
  color: #3d3c72;
  cursor: pointer;

  &:hover {
    background: #3d3c72;
    color: white;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export default AnimeCard;
