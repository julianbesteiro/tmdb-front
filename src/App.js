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
import Test from "./components/Test";
import Layout from "./components/Layout";
import FavoritesList from "./components/FavoritesList";
import Content from "./components/Content";

function App() {
  const content = useSelector((state) => state.content.content);
  const user = useSelector((state) => state.user);

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
