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
import { Layout } from "./Layout";
import { Nowmovie } from "./Nowmovie";

export const Home = () => {
  //1. 마운트시 api에 요청
  // 2.비동기 통신
  // 3.예외 처리

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
