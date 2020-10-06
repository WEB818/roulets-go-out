import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding: 0 10px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
`;
