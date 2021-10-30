import styled from "styled-components";
export const ScrollDiv = styled.div`
  background-color: white;
  border-radius: 100%;
  position: fixed;
  height: 4rem;
  width: 4rem;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 5rem;
    height: 5rem;
  }
`;
