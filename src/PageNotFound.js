import { styled } from "styled-components";

const Container = styled.div`
  padding: 400px 5%;

  @media screen and (max-width: 450px) {
    padding: 120px 5%;
    margin-bottom: 200px;
  }
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;

  @media screen and (max-width: 450px) {
    font-size: 40px;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Title>Error : 404 Page not Found!</Title>
    </Container>
  );
};
