import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../store/user";
import { setType } from "../store/content";
import { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const url = "https://tmdb-back-end-02eo.onrender.com";

function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const userToDisplay = loggedInUser.user;

  const handleClick = () => {
    setDrawerOpen(false);
    axios
      .post(`${url}/api/logout`, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        localStorage.removeItem("token");
        console.log("User logged out");
        dispatch(
          setLoggedInUser({
            email: null,
            name: null,
            user: null,
          })
        );
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSelection = () => {
    setDrawerOpen(false);
  };

  const handleSearchClick = () => {
    dispatch(setType(""));
  };

  return (
    <>
      <AppBar position="static" sx={{ height: "20%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            noWrap
            component="a"
            href="/"
            color="white"
            sx={{
              marginLeft: "auto",
              mr: 2,
              display: { md: "none" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              padding: "10px",
            }}
          >
            TMDB
          </Typography>

          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            color="white"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              padding: "10px",
            }}
          >
            TMDB
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/search/movie"
            onClick={handleSearchClick}
            color="white"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
              padding: "10px",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Search Movies
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/search/tv"
            onClick={handleSearchClick}
            color="white"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
              padding: "10px",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            Search TV Shows
          </Typography>

          {userToDisplay ? (
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/searchusers"
              color="white"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
                padding: "10px",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              Search Users
            </Typography>
          ) : (
            ""
          )}

          {userToDisplay ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  component="a"
                  href="/user-favorites"
                  sx={{
                    fontSize: "1.15rem",
                    display: { xs: "none", md: "flex" },
                    padding: "5px",
                    margin: "5px",
                    whiteSpace: "nowrap",
                    textDecoration: "none",

                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    color: "white",
                  }}
                >
                  Hello {userToDisplay}{" "}
                </Typography>

                <Button
                  onClick={handleClick}
                  color="secondary"
                  sx={{
                    borderRadius: "10px",
                    border: `solid 0.1rem white`,
                    fontSize: "1.15rem",
                    whiteSpace: "nowrap",

                    display: { xs: "none", md: "flex" },
                    padding: "5px",
                    margin: "5px",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    color: "white",
                  }}
                >
                  Log out
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  onClick={handleClick}
                  color="secondary"
                  href="/signup"
                  sx={{
                    fontSize: "1.15rem",
                    borderRadius: "10px",
                    border: `solid 0.1rem white`,

                    display: { xs: "none", md: "flex" },
                    padding: "5px",
                    margin: "5px",
                    whiteSpace: "nowrap",

                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    color: "white",
                  }}
                >
                  Sign up
                </Button>

                <Button
                  onClick={handleClick}
                  color="secondary"
                  href="/login"
                  sx={{
                    borderRadius: "10px",
                    border: `solid 0.1rem white`,
                    fontSize: "1.15rem",

                    display: { xs: "none", md: "flex" },
                    padding: "5px",
                    margin: "5px",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    color: "white",
                  }}
                >
                  Login
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {userToDisplay ? (
          <>
            <List>
              <ListItem
                button
                component={Link}
                to="/user-favorites"
                onClick={handleSelection}
              >
                <ListItemText primary={`Hello ${userToDisplay}`} />
              </ListItem>

              <ListItem
                button
                component={Link}
                to="/user-favorites"
                onClick={handleSelection}
              >
                <ListItemText primary={`My favorites`} />
              </ListItem>
            </List>
            <Divider />
          </>
        ) : (
          <>
            <Divider />

            <List>
              <ListItem
                button
                component={Link}
                to="/login"
                onClick={handleSelection}
              >
                <ListItemText primary="LOGIN" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/signup"
                onClick={handleSelection}
              >
                <ListItemText primary="SIGNUP" onClick={handleSelection} />
              </ListItem>
            </List>
          </>
        )}
        <List>
          <ListItem
            button
            component={Link}
            to="/search/movie"
            onClick={() => {
              handleSelection();
              handleSearchClick();
            }}
          >
            <ListItemText primary="Search Movies" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/search/tv"
            onClick={() => {
              handleSelection();
              handleSearchClick();
            }}
          >
            <ListItemText primary="Search TV Shows" />
          </ListItem>
          {userToDisplay && (
            <ListItem
              button
              component={Link}
              to="/searchusers"
              onClick={handleSelection}
            >
              <ListItemText primary="Search Users" />
            </ListItem>
          )}
        </List>

        {userToDisplay && (
          <>
            <Divider />

            <List>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </>
        )}
      </Drawer>
    </>
  );
}

export default Navbar;
