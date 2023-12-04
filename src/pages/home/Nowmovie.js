import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Container = styled.section`
  margin-bottom: 80px;
  a {
    color: white;
  }
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 50px;

  @media screen and (max-width: 1080px) {
    font-size: 35px;
  }

  @media screen and (max-width: 450px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

const CoverBg = styled.div`
  height: 550px;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;
  border-radius: 15px;
  margin-bottom: 20px;

  @media screen and (max-width: 1080px) {
    height: 350px;
  }

  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;

const MovieTitle = styled.h4`
  font-size: 18px;

  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const params = {
  spaceBetween: 40,
  slidesPerView: 3.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 3.5,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 1.2,
    },
  },
};

export const Nowmovie = ({ titleName, NowData }) => {
  return (
    <Container>
      <Title>{titleName}</Title>

      <Swiper {...params}>
        {NowData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <CoverBg $bgUrl={data.poster_path} />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
