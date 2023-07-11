import { Box, Grid, ImageListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavoritesDispatch } from "../store/user";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import axios from "axios";
require("dotenv").config();

const url = process.env.URL;

function Item({ content, i, addToFavorites, type }) {
  const imageRoute = `https://image.tmdb.org/t/p/w500/${content.poster_path}`;

  const contentTitle = type === "movie" ? content.title : content.name;

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const favorites = user.favorites || [];

  const favoritesFilteredToGetId = favorites.map((fav) => {
    let splitted = fav.split("(ID ")[1];
    let length = splitted.length - 1;
    return splitted.slice(0, length);
  });

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

    const contentForDispatch = `${type}${titleOrName} (ID ${content.id})`;
    dispatch(removeFromFavoritesDispatch(contentForDispatch));
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

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Box width="100%">
          <Link to={`/detail/${type}/${content.id}`}>
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
              {i + 1}-{contentTitle}
            </Typography>
          </Link>

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
            {user.email &&
            favoritesFilteredToGetId.includes(content.id.toString()) ? (
              <p onClick={() => removeFromFavorites(content)}>
                <u>Remove from favorites</u>
                <DeleteIcon />
              </p>
            ) : (
              ""
            )}

            {user.email &&
            !favoritesFilteredToGetId.includes(content.id.toString()) ? (
              <p
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorites(contentTitle, content.id);
                }}
              >
                <u>Add to favorites ❤️</u>
              </p>
            ) : (
              ""
            )}
          </Typography>
        </Box>
        <Link to={`/detail/${type}/${content.id}`}>
          <ImageListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={content.poster_path ? imageRoute : ""}
              alt="Content poster"
              height="70%"
            />
          </ImageListItem>
        </Link>
      </Grid>
    </>
  );
}

export default Item;
