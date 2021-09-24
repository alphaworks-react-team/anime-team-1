import styled from "styled-components";

const Banner = styled.div`
  max-height: 30%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    background-size: contain;
  }
`;

export default Banner;
