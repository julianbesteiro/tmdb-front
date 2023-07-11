import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Favorites({ fav, i, removeFromFavorites, type }) {
  let typeComplete;
  if (type === "m") typeComplete = "movie";
  if (type === "t") typeComplete = "tv";

  const favoritesFilteredToGetId = (fav) => {
    let splitted = fav.split("(ID ")[1];
    let length = splitted.length - 1;
    return splitted.slice(0, length);
  };

  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Box width="100%">
          <Link to={`/detail/${type}/${favoritesFilteredToGetId(fav)}`}>
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
              {fav}
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
            <p onClick={() => removeFromFavorites(fav, type)}>
              <u>Remove from favorites</u>
              <DeleteIcon />
            </p>
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default Favorites;
