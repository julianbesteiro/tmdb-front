//import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
//import Content from "./components/Content";
import Search from "./components/Search";
import { Route, Routes } from "react-router";
import Card from "./commons/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SearchUsers from "./components/SearchUsers";
import UserFavorites from "./commons/UserFavorites";

function App() {
  const content = useSelector((state) => state.content);

  return (
    <>
      <div>
        <div className="container is-fluid columns">
          <Navbar />
          <Sidebar />

          <Routes>
            <Route path="/" element={<p>Welcome to TMDB!</p>} />
            <Route path="/welcome" element={<p>Welcome to TMDB!</p>} />
            <Route path="/search/:type" element={<Search />} />
            <Route path="/searchusers" element={<SearchUsers />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/:type/:contentId"
              element={<Card content={content} />}
            />
            <Route path="/users/:username" element={<UserFavorites />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
