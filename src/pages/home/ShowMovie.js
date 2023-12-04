import styled from "styled-components";
import { IMG_URL } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import "./ShowMovie.css";

const Container = styled.section`
  margin-bottom: 80px;
  a {
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 450px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

const CoverBg = styled.div`
  height: 400px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 450px) {
    height: 250px;
    margin-bottom: 15px;
  }
`;

const MovieTitle = styled.h4`
  font-size: 17px;

  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;

const params = {
  spaceBetween: 15,
  slidesPerView: 6.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 2.2,
    },
  },
};

export const ShowMovie = ({ titleName, movieData }) => {
  return (
    <Container>
      <Title>{titleName}</Title>

      <Swiper {...params}>
        {movieData.map((data) => (
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
