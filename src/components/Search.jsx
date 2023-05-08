import useInput from "../hooks/useInput";
import axios from "axios";
import ListItem from "../commons/ListItem";
import { useDispatch } from "react-redux";
import { setMovies } from "../store/movies";
import { useSelector } from "react-redux";

function Search() {
  const search = useInput();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=577cc8ccde4f5f441c7cca58aada5559&query=${search.value.replace(
          /\s/g,
          "+"
        )}`
      )
      .then((res) => {
        return res.data.results;
      })
      .then((movie) => dispatch(setMovies(movie)))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div className="container is-fluid columns">
          <p>Enter something:</p>
          <form onSubmit={handleSubmit}>
            <label className="label my-3">Search</label>
            <input
              {...search}
              className="input my-3"
              type="text"
              placeholder="Search movies"
            />
          </form>
          <ListItem movies={movies || []} />
        </div>
      </div>
    </>
  );
}

export default Search;
