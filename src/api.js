const fetch = require("node-fetch");

const baseurl = "https://api.themoviedb.org/3/";
const nowUrl = baseurl + "movie/now_playing" + "?language=ko-kr";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWU0NjEyNDc1ZTkyZTEyOWJjNWUyZmZmNmQ2OTk4MyIsInN1YiI6IjY1NGIzYTEyMjg2NmZhMDEzOGE5MTA0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rc9wZ9zcMs3EC1rtA93ULAde1TIQr-HhN4zXlJ1t9KM",
  },
};

export const nowPlaying = () =>
  fetch(nowUrl, options).then((res) => res.json());
