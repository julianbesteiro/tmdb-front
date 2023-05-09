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

  const favoritesForFilter = (str) => {
    return favorites
      .filter((element) => element[0] === str)
      .map((element) => element.slice(1));
  };
  const movieFavorites = favoritesForFilter("m");
  const tvFavorites = favoritesForFilter("t");

  const removeFromFavorites = (fav, type) => {
    const contentForDispatch = `${type}${fav}`;

    dispatch(removeFromFavoritesDispatch(contentForDispatch));
  };

  return (
    <div>
      <h1>THESE ARE YOUR FAVORITES</h1>
      <h2>MOVIES:</h2>

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

      <h2>TV SHOWS:</h2>

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
  );
}

export default Sidebar;
