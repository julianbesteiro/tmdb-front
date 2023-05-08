import { Link } from "react-router-dom";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { addToFavoritesDispatch } from "../store/user";
import { useEffect } from "react";

function ListItem({ movies }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favorites = user.favorites;

  const addToFavorites = (id) => {
    dispatch(addToFavoritesDispatch(id));
  };

  useEffect(() => {
    axios
      .put("/api/addtofavorites", {
        favorites: user.favorites,
        email: user.email,
      })
      .then((res) => console.log("FAVS updated", res.data))
      .catch((error) => console.log(error));
  }, [favorites]);

  return (
    <div className="columns is-multiline layout">
      {movies.map((movie, i) => (
        <div className="column is-4" key={i}>
          <Link to={`/movie/${movie.id}`}>
            <Item movie={movie} i={i} addToFavorites={addToFavorites} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListItem;
