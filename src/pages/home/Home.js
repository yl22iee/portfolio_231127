import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { nowPlaying } from "../../api";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [nowPlayingData, setnowPlayingData] = useState();
  const [isloading, setIsLoaing] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setnowPlayingData(nowResults);
        console.log(nowResults);

        setIsLoaing(false);
      } catch (error) {
        console.log("에러" + error);
      }
    })();
  }, []);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div>
          <Banner data={nowPlayingData[0]} />
        </div>
      )}
    </>
  );
};
