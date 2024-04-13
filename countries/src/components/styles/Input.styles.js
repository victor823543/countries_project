import { styled } from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: ${props => props.theme.colors.input};
  height: 40px;
  font-size: 30px;
  font-weight: 200;
`