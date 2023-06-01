import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.bgColor2};
  padding: 15px 70px;
  border-radius: 10%;
  margin-top: 30px;
`;

export const Name = styled("p")`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 0;
`;

export const Details = styled("p")`
  font-size: 12px;
  font-weight: 300;
  margin-top: 0;
`;

export const Temperature = styled("p")`
  font-size: 20px;
  font-weight: 400;
`;