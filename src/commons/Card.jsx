import { ImageList, ImageListItem, Typography } from "@mui/material";
import { useParams } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  addToFavoritesDispatch,
  removeFromFavoritesDispatch,
} from "../store/user";
import { setContent } from "../store/content";

const url = "https://tmdb-back-end-02eo.onrender.com";

const Card = ({ content, user }) => {
  const [uniqueSelectedContent, setUniqueSelectedContent] = useState({});

  let imageRoute =
    `https://image.tmdb.org/t/p/w500/${uniqueSelectedContent.poster_path}` ||
    "";

  let favoritesFilteredToGetId;
  let contentTitle;

  const { type, contentId } = useParams();
  const dispatch = useDispatch();

  if (type === "movie") contentTitle = uniqueSelectedContent.title;
  else {
    contentTitle = uniqueSelectedContent.name;
  }

  const favorites = user.favorites || [];

  if (user) {
    favoritesFilteredToGetId = favorites.map((fav) => {
      let splitted = fav.split("(ID ")[1];
      let length = splitted.length - 1;
      return splitted.slice(0, length);
    });
  }

  const removeFromFavorites = (content) => {
    let type;
    let titleOrName;

    if (content.name) {
      type = "t";
      titleOrName = content.name;
    } else {
      type = "m";
      titleOrName = content.title;
    }

    const contentForDispatch = `${type}${titleOrName} (ID ${uniqueSelectedContent.id})`;
    dispatch(removeFromFavoritesDispatch(contentForDispatch));
  };

  const addToFavorites = (contentTitle, id) => {
    let newFav = `${type[0]}${contentTitle} (ID ${id})`;
    dispatch(addToFavoritesDispatch(newFav));
  };

  useEffect(() => {
    axios
      .put(
        `${url}/api/addtofavorites`,
        {
          favorites: favorites,
          email: user.email,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => console.log("Favorites check"))
      .catch((error) => console.log(error));
  }, [favorites]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${contentId}?api_key=577cc8ccde4f5f441c7cca58aada5559`
      )
      .then((res) => {
        console.log("data", res.data);
        setUniqueSelectedContent(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {content !== 0 ? (
        <>
          <Typography sx={{ marginTop: "20px", fontSize: "4rem" }}>
            {type === "movie"
              ? uniqueSelectedContent.title
              : uniqueSelectedContent.name}
          </Typography>

          <Typography
            sx={{
              width: "100%", // Extend the width of the Typography component
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              transition: "transform 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            {user.email && favoritesFilteredToGetId.includes(contentId) ? (
              <p onClick={() => removeFromFavorites(uniqueSelectedContent)}>
                <u>Remove from favorites</u>
                <DeleteIcon />
              </p>
            ) : (
              ""
            )}

            {user.email && !favoritesFilteredToGetId.includes(contentId) ? (
              <p
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorites(contentTitle, uniqueSelectedContent.id);
                }}
              >
                <u>Add to favorites ❤️</u>
              </p>
            ) : (
              ""
            )}
          </Typography>

          <Typography sx={{ fontSize: "1.5rem" }}>
            {uniqueSelectedContent.overview}
          </Typography>

          <ImageListItem sx={{ height: "300px", width: "414px" }}>
            <img
              src={uniqueSelectedContent.poster_path ? imageRoute : ""}
              alt="Content poster"
            />
          </ImageListItem>
        </>
      ) : (
        <div>Please go back to the previous page</div>
      )}
    </>
  );
};

export default Card;
