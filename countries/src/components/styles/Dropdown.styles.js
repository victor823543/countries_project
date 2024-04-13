import { styled } from "styled-components";

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  height: 400px;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.dropdown};
`