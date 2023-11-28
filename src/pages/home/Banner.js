import { styled } from "styled-components";
import { IMG_URL } from "../../constants";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  padding: 400px 5%;
  position: relative;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;

  h3,
  p {
    position: relative;
  }

  h3 {
    max-width: 750px;
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-bottom: 25px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    max-width: 750px;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.7;
    line-height: 28px;
  }

  @media screen and (max-width: 450px) {
    h3 {
      font-size: 50px;
      line-height: 65px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 35%,
    rgba(0, 0, 0, 0) 75%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Banner = ({ data }) => {
  return (
    <MainBanner $bgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview}</p>
    </MainBanner>
  );
};
