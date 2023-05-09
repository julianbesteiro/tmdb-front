import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";

function UserFavorites() {
  const { username } = useParams();

  const [favoritesPerUser, setFavoritesPerUser] = useState([]);

  const movieFavoritesPerUser = favoritesPerUser.filter(
    (favorite) => favorite[0] === "m"
  );
  const tvShowsFavoritesPerUser = favoritesPerUser.filter(
    (favorite) => favorite[0] === "t"
  );

  useEffect(() => {
    console.log("USEEFFECT FAVS USERS");
    axios
      .get(`/api/userfavorites/${username}`)
      .then((favorites) => {
        console.log("FAVORITES en axios", favorites.data);
        setFavoritesPerUser(favorites.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="columns is-multiline layout">
      <h2>{username}</h2>
      <h3>FAVORITE MOVIES:</h3>
      {movieFavoritesPerUser.length === 0
        ? "None"
        : movieFavoritesPerUser.map((favorite) => <p>{favorite.slice(1)}</p>)}
      <h3>FAVORITE TV SHOWS:</h3>
      {tvShowsFavoritesPerUser.length === 0
        ? "None"
        : tvShowsFavoritesPerUser.map((favorite) => <p>{favorite.slice(1)}</p>)}
    </div>
  );
}

export default UserFavorites;
