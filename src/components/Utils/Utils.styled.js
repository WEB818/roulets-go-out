import styled from "styled-components";

export const Button = styled.button`
  background: #ea4b8b;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
`;

export const Label = styled.label`
  min-width: 100px;
  text-align: left;
`;

export const Selection = styled.select`
  border: none;
  max-width: 200px;
  font-family: "Noto Sans TC", sans-serif;
  margin: 30px auto;
`;

export const Input = styled.input`
  max-width: 200px;

  border: none;
  border-bottom: 1px solid #ea4b8b;
`;

export const TextArea = styled.textarea`
  height: 100px;
  width: 300px;
  margin: 20px auto;
  font-family: "Noto Sans TC", sans-serif;
`;

export const LinkTo = styled.a`
  text-decoration: none;
  color: #ea4b8b;
`;
