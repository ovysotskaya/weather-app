import styled from "@emotion/styled";

export const Wrapper = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
`;

export const Header = styled('h1')`
  color: ${props => props.theme.color};
`;
