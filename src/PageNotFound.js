import { styled } from "styled-components";

const Container = styled.div`
  padding: 400px 5%;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
`;

export const PageNotFound = () => {
  return (
    <Container>
      <Title>Error : 404 Page not Found!</Title>
    </Container>
  );
};
