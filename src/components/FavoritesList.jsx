import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromFavoritesDispatch } from "../store/user";
import Favorites from "../commons/Favorites";
import { useEffect } from "react";
import axios from "axios";

function FavoritesList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const favorites = user.favorites || [];

  const favoritesForFilter = (str) => {
    return favorites
      .filter((element) => element[0] === str)
      .map((element) => element.slice(1));
  };
  const movieFavorites = favoritesForFilter("m");
  const tvFavorites = favoritesForFilter("t");

  const removeFromFavorites = (fav, type) => {
    const contentForDispatch = `${type}${fav}`;
    console.log(contentForDispatch);
    dispatch(removeFromFavoritesDispatch(contentForDispatch));
  };

  useEffect(() => {
    axios
      .put("/api/addtofavorites", {
        favorites: favorites,
        email: user.email,
      })
      .then((res) => console.log("Favorites check"))
      .catch((error) => console.log(error));
  }, [favorites]);

  return (
    <>
      {user.email ? (
        <div>
          <br />
          <h3>These are your favorites</h3>
          <h4>Movies</h4>

          {movieFavorites.length === 0 ? (
            "No favorites added"
          ) : (
            <div>
              {movieFavorites.map((fav, i) => (
                <div className="column is-4" key={i}>
                  <Favorites
                    fav={fav}
                    i={i}
                    removeFromFavorites={removeFromFavorites}
                    type="m"
                  />
                </div>
              ))}
            </div>
          )}

          <h4>TV shows</h4>

          {tvFavorites.length === 0 ? (
            "No favorites added"
          ) : (
            <div>
              {tvFavorites.map((fav, i) => (
                <div className="column is-4" key={i}>
                  <Favorites
                    fav={fav}
                    i={i}
                    removeFromFavorites={removeFromFavorites}
                    type="t"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FavoritesList;
