import styled from "styled-components";

export const HomeListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row nowrap;
  width: 100%;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;
