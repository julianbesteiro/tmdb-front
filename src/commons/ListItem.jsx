import { Link } from "react-router-dom";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { addToFavoritesDispatch } from "../store/user";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
require("dotenv").config();

const url = process.env.URL;

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
    <Grid
      container
      spacing={2}
      height={"100%"}
      padding={{ xs: "1.8rem", sm: "1rem", md: "1.2rem" }}
    >
      {content.map((content, i) => (
        <Item
          content={content}
          i={i}
          addToFavorites={addToFavorites}
          type={type}
        />
      ))}
    </Grid>
  );
}

export default ListItem;
