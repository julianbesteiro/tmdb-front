import { Link } from "react-router-dom";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { addToFavoritesDispatch } from "../store/user";
import { useEffect } from "react";

function ListItem({ content, type }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favorites = user.favorites || [];

  const addToFavorites = (contentTitle, id) => {
    let newFav = `${type[0]}${contentTitle} (ID ${id})`;
    dispatch(addToFavoritesDispatch(newFav));
  };

  useEffect(() => {
    axios
      .put("/api/addtofavorites", {
        favorites: favorites,
        email: user.email,
      })
      .then((res) => console.log("FAVS updated", res.data))
      .catch((error) => console.log(error));
  }, [favorites]);

  return (
    <div className="columns is-multiline layout">
      {content.map((content, i) => (
        <div className="column is-4" key={i}>
          <Link to={`/${type}/${content.id}`}>
            <Item
              content={content}
              i={i}
              addToFavorites={addToFavorites}
              type={type}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListItem;
