import { useEffect, useState } from "react";
import SwiperContent from "../commons/SwiperContent";
import axios from "axios";
import "./Content.css";

function Content() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=577cc8ccde4f5f441c7cca58aada5559"
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => setPopularMovies(content))
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=577cc8ccde4f5f441c7cca58aada5559"
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => setTopRatedMovies(content))
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=577cc8ccde4f5f441c7cca58aada5559"
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => setUpcomingMovies(content))
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=577cc8ccde4f5f441c7cca58aada5559"
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => setPopularTvShows(content))
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=577cc8ccde4f5f441c7cca58aada5559"
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => setTopRatedTvShows(content))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 id="h1"> Welcome to The Movie Database</h1>

      <SwiperContent
        title="Popular Movies"
        content={popularMovies}
        type="movie"
      />

      <SwiperContent
        title="Top Rated Movies"
        content={topRatedMovies}
        type="movie"
      />

      <SwiperContent
        title="Upcoming Movies"
        content={upcomingMovies}
        type="movie"
      />

      <SwiperContent
        title="Popular TV Shows"
        content={popularTvShows}
        type="tv"
      />

      <SwiperContent
        title="Top Rated TV Shows"
        content={topRatedTvShows}
        type="tv"
      />
    </>
  );
}

export default Content;
