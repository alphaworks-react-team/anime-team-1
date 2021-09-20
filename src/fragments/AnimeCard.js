import styled from "styled-components";

const AnimeCard = styled.div`
  height: 20%;
  width: 50%;
  margin: 1rem;
  display: flex;
  flex-flow: row;
  color: #3d3c72;

  &:hover {
    background: #3d3c72;
    color: white;
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`

export default AnimeCard