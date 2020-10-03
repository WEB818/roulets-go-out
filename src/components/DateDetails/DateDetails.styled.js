import styled from "styled-components";

export const DateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
`;
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
`;
export const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
`;
