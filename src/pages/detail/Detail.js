import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Loading } from "../../components/Loading";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../constants";

const Container = styled.div`
  padding: 100px 150px 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
  }
`;

const Bg = styled.div`
  width: 40%;
  height: 800px;
  /* background-color: lightgray; */
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 10px;
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

export const Detail = () => {
  const { id } = useParams();
  const [isloading, setisloading] = useState(true);
  const [DetailData, setDetailData] = useState();

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
          <Bg $bgUrl={DetailData.poster_path} />
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
            <Desc></Desc>
          </Con>
        </Container>
      )}
    </div>
  );
};
