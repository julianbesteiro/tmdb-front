import useInput from "../hooks/useInput";
import axios from "axios";
import ListItem from "../commons/ListItem";
import { useDispatch } from "react-redux";
import { setContent } from "../store/content";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

function Search() {
  const search = useInput();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const { type } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/${type}?api_key=577cc8ccde4f5f441c7cca58aada5559&query=${search.value.replace(
          /\s/g,
          "+"
        )}`
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => dispatch(setContent(content)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dispatch(setContent([]));
  }, [type]);

  return (
    <>
      <div>
        <div className="container is-fluid columns">
          <p>Enter {type === "tv" ? "TV show" : type} name:</p>
          <form onSubmit={handleSubmit}>
            <label className="label my-3">Search</label>
            <input
              {...search}
              className="input my-3"
              type="text"
              placeholder="Search here"
            />
          </form>
          <ListItem content={content || []} type={type} />
        </div>
      </div>
    </>
  );
}

export default Search;
