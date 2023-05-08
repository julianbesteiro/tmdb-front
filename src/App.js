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

function App() {
  const movies = useSelector((state) => state.movies);

  return (
    <>
      <div>
        <div className="container is-fluid columns">
          <Navbar />
          <Sidebar />

          <Routes>
            <Route path="/" element={<p>Welcome to TMDB!</p>} />
            <Route path="/welcome" element={<p>Welcome to TMDB!</p>} />
            <Route path="/search" element={<Search />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/movie/:movieId" element={<Card movies={movies} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
