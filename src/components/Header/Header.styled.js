import styled from "styled-components";
import Profile from "../../assets/profile.jpg";

export const Circle = styled.img`
  width: 100px;
  height: 100px;
  background-image: url(${Profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 10%;
  top: 10%;
  border: none;
`;
