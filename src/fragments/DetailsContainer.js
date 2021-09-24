import styled from "styled-components";

const DetailsContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  width: 80%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export default DetailsContainer;
