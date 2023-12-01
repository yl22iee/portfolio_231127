import { styled } from "styled-components";

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  opacity: 0.6;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
`;

export const Footer = () => {
  return <Container>&copy right; 2023 DowonLee</Container>;
};
