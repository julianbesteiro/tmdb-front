import Search from "./components/Search";
import { Route, Routes } from "react-router";
import Card from "./commons/Card";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SearchUsers from "./components/SearchUsers";
import UserFavorites from "./commons/UserFavorites";
import NotFound from "./commons/NotFound";
import Test from "./components/Test";
import Layout from "./components/Layout";
import FavoritesList from "./components/FavoritesList";
import Content from "./components/Content";
import axios from "axios";
import { setLoggedInUser } from "./store/user";
import { useState, useEffect } from "react";

const url = "https://tmdb-back-end-02eo.onrender.com";

function App() {
  const content = useSelector((state) => state.content.content);
  const user = useSelector((state) => state.user);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post(
        `${url}/api/me`,
        { token: localStorage.getItem("token") },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => dispatch(setLoggedInUser(res.data)))
      .catch(() => console.error("You are not logged in"));
  }, [token]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/search/:type" element={<Search />} />
        <Route path="/searchusers" element={<SearchUsers />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/detail/:type/:contentId"
          element={<Card content={content} user={user} />}
        />
        <Route path="/users/:username" element={<UserFavorites />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/test" element={<Test />} />
        <Route path="/user-favorites" element={<FavoritesList />} />
      </Routes>
    </Layout>
  );
}

export default App;
