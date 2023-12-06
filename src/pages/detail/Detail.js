import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Loading } from "../../components/Loading";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../constants";
import "./Detail.css";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  padding: 100px 150px 150px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 670px) {
    margin-top: 90px;
    padding: 0.8rem 0.5rem;
  }

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0.8rem;
    margin-top: 70px;
  }
`;

const Bg = styled.div`
  width: 40%;
  height: 800px;
  /* background-color: lightgray; */
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
  box-shadow: 10px 13px 32px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 13px 32px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 13px 32px -4px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 450px) {
    width: 100%;
    height: 500px;
  }
`;

const Con = styled.div`
  width: 55%;
  height: 100%;
  font-size: 20px;
  padding-top: 50px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: 670px) {
    font-size: 34px;
  }

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Rated = styled.div`
  font-weight: 400;
`;

const Genres = styled.div`
  margin: 20px 0;
  li {
    list-style: disc;
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

const Release = styled.div`
  margin: 100px 0 20px 0;
`;

const Runtime = styled.div``;

const Desc = styled.div`
  max-width: 70%;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 50px;
  opacity: 0.7;
  line-height: 2em;
  font-weight: 300;
  @media screen and (max-width: 450px) {
    max-width: 100%;
  }
`;

const Overview = styled.div`
  max-width: 700px;
  font-size: 20px;
  margin-top: 20px;
  p {
    letter-spacing: 1px;
    line-height: 25px;
  }

  @media screen and (max-width: 450px) {
    max-width: 350px;
    font-size: 15px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);
  const [DetailData, setDetailData] = useState();
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setDetailData(data);
        console.log(data);
        setisloading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    })();
  }, [id]);

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <Container>
          <Bg className="photo" $bgUrl={DetailData.poster_path} />
          <Con>
            <Title>{DetailData.title}</Title>
            <Rated>평점 : {Math.round(DetailData.vote_average)}</Rated>
            <Genres>
              {DetailData.genres.map((data) => (
                <li key={data.id}>{data.name}</li>
              ))}
            </Genres>
            <Release>개봉 예정일 : {DetailData.release_date}</Release>
            <Runtime>상영 시간 : {DetailData.runtime} 분</Runtime>
            <Overview>
              영화 줄거리 : <p>{DetailData.overview}</p>
            </Overview>
            <Desc></Desc>
          </Con>
        </Container>
      )}
    </div>
  );
};
