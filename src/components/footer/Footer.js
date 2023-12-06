import { styled } from "styled-components";

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 17px;
  opacity: 0.6;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  p {
    margin-bottom: 1%;
  }

  @media screen and (max-width: 450px) {
    padding: 20px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <p>
        <i class="fa-regular fa-copyright"></i> 2023 DowonLee
      </p>
      <p>for more information. https://github.com/yl22iee/portfolio_231127</p>
    </Container>
  );
};
