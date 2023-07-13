import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const url = "https://tmdb-back-end-02eo.onrender.com";

function UserFavorites() {
  const { username } = useParams();

  const [favoritesPerUser, setFavoritesPerUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const favoritesFilteredToGetId = (fav) => {
    let splitted = fav.split("(ID ")[1];
    let length = splitted.length - 1;
    return splitted.slice(0, length);
  };

  useEffect(() => {
    axios
      .get(`${url}/api/userfavorites/${username}`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((favorites) => {
        setFavoritesPerUser(favorites.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h2>{username}</h2>
      <h3>FAVORITE MOVIES:</h3>
      {isLoading
        ? "Loading..."
        : favoritesPerUser.filter((favorite) => favorite[0] === "m").length ===
          0
        ? "None"
        : favoritesPerUser
            .filter((favorite) => favorite[0] === "m")
            .map((favorite, i) => (
              <Link to={`/detail/movie/${favoritesFilteredToGetId(favorite)}`}>
                <p key={i}>{favorite.slice(1)}</p>
              </Link>
            ))}
      <h3>FAVORITE TV SHOWS:</h3>
      {isLoading
        ? "Loading..."
        : favoritesPerUser.filter((favorite) => favorite[0] === "t").length ===
          0
        ? "None"
        : favoritesPerUser
            .filter((favorite) => favorite[0] === "t")
            .map((favorite, i) => (
              <Link to={`/detail/tv/${favoritesFilteredToGetId(favorite)}`}>
                <p key={i}>{favorite.slice(1)}</p>
              </Link>
            ))}
    </div>
  );
}

export default UserFavorites;
