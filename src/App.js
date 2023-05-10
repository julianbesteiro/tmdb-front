import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import { Route, Routes } from "react-router";
import Card from "./commons/Card";
import { useSelector } from "react-redux";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SearchUsers from "./components/SearchUsers";
import UserFavorites from "./commons/UserFavorites";
import NotFound from "./commons/NotFound";
import { Navigate } from "react-router";

function App() {
  const content = useSelector((state) => state.content);

  return (
    <div>
      <div className="mainClass">
        <Navbar />
        <Sidebar />
      </div>
      <div className="container is-fluid columns">
        <Routes>
          <Route
            path="/"
            element={
              <h1>
                <strong>Welcome!</strong>
              </h1>
            }
          />
          <Route path="/search/:type" element={<Search />} />
          <Route path="/searchusers" element={<SearchUsers />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/detail/:type/:contentId"
            element={<Card content={content} />}
          />
          <Route path="/users/:username" element={<UserFavorites />} />

          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
