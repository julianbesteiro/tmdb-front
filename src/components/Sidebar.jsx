import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromFavoritesDispatch } from "../store/user";
import Favorites from "../commons/Favorites";
import { useEffect } from "react";
import axios from "axios";

function Sidebar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favorites = user.favorites || [];

  const removeFromFavorites = (id) => {
    console.log("REMOVE FROM FAVS");
    dispatch(removeFromFavoritesDispatch(id));
  };

  useEffect(() => {
    axios
      .put("/api/removefromfavorites", {
        favorites: user.favorites,
        email: user.email,
      })
      .then((res) => console.log("FAVS updated", res.data))
      .catch((error) => console.log(error));
  }, [favorites]);

  console.log("FAVORITES", favorites);

  return (
    <div>
      <h1>THESE ARE YOUR FAVORITES</h1>

      {favorites.length === 0 ? (
        ""
      ) : (
        <div>
          {favorites.map((fav, i) => (
            <div className="column is-4" key={i}>
              <Favorites
                fav={fav}
                i={i}
                removeFromFavorites={removeFromFavorites}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
