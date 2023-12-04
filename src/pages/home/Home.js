import {
  PopPlaying,
  TopPlaying,
  Updatemov,
  nowPlaying,
  topRated,
} from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import "swiper/css";
import { ShowMovie } from "./ShowMovie";
import { Loading } from "../../components/Loading";
import { Nowmovie } from "./Nowmovie";
import { styled } from "styled-components";

const Layout = styled.div`
  padding: 150px 5%;

  @media screen and (max-width: 450px) {
    padding: 80px 5%;
  }
`;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [topData, setTopData] = useState();
  const [popData, setpopData] = useState();
  const [updateData, setupdateData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);
        // console.log(nowResults);

        const { results: topResults } = await TopPlaying();
        setTopData(topResults);

        const { results: PopResults } = await PopPlaying();
        setpopData(PopResults);

        const { results: UpResults } = await Updatemov();
        setupdateData(UpResults);

        setIsLoading(false);
      } catch (error) {
        console.log("에러:" + error);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[0]} />

              <Layout>
                <Nowmovie
                  titleName={"현재 상영 영화"}
                  NowData={nowPlayingData}
                />
                <ShowMovie titleName={"Top 10 Movie"} movieData={topData} />
                <ShowMovie titleName={"인기 영화"} movieData={popData} />
                <ShowMovie titleName={"개봉 예정영화"} movieData={updateData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
