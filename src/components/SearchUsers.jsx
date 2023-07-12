import axios from "axios";
import useInput from "../hooks/useInput";
import { useState } from "react";
import Users from "../commons/Users";
import { useSelector } from "react-redux";
const url = "https://tmdb-back-end-02eo.onrender.com";

function SearchUsers() {
  const search = useInput();
  const [searchedUser, setSearchedUser] = useState("");
  const loggedInUser = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.value === loggedInUser.user) {
      alert("Can't search your own username");
      return;
    } else {
      axios
        .get(`${url}/api/users/${search.value.toLowerCase()}`, {
          withCredentials: true,
          credentials: "include",
        })
        .then((res) => res.data)
        .then((users) =>
          setSearchedUser(
            users.filter((element) => element !== loggedInUser.user)
          )
        )
        .catch((error) => console.log(error));
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <p>Enter another username:</p>
      <form onSubmit={handleSubmit}>
        <input
          {...search}
          className="input my-3"
          type="text"
          placeholder="Search here"
        />
      </form>
      <Users searchedUser={searchedUser} />
    </div>
  );
}

export default SearchUsers;
