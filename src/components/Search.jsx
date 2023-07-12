import useInput from "../hooks/useInput";
import axios from "axios";
import ListItem from "../commons/ListItem";
import { useDispatch } from "react-redux";
import { setContent, setType } from "../store/content";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const url = "https://tmdb-back-end-02eo.onrender.com";

function Search() {
  const search = useInput();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content.content);
  const typeFromState = useSelector((state) => state.content.type);
  const { type } = useParams();

  const [searchMade, setSearchMade] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchMade(true);

    axios
      .get(
        `https://api.themoviedb.org/3/search/${type}?api_key=577cc8ccde4f5f441c7cca58aada5559&query=${search.value
          .toLowerCase()
          .replace(/\s/g, "+")}`
      )
      .then((res) => {
        return res.data.results;
      })
      .then((content) => {
        dispatch(setContent(content));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (type !== typeFromState) {
      dispatch(setType(type));
      dispatch(setContent([]));
      console.log("hola", search);
      search.value = "";
    }
  }, [type]);

  return (
    <>
      <div style={{ margin: "20px" }}>
        <p>Enter {type === "tv" ? "TV show" : type} name:</p>
        <form onSubmit={handleSubmit}>
          <input
            {...search}
            className="input my-3"
            type="text"
            placeholder="Search here"
          />
        </form>
        {searchMade && content.length === 0 ? (
          <div>There are no matching records.</div>
        ) : (
          ""
        )}
        <ListItem content={content || []} type={type} />
      </div>
    </>
  );
}

export default Search;
