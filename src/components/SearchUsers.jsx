import axios from "axios";
import useInput from "../hooks/useInput";
import { useState } from "react";
import Users from "../commons/Users";
import { useSelector } from "react-redux";

function SearchUsers() {
  const search = useInput();
  const [searchedUser, setSearchedUser] = useState("");
  const loggedInUser = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    console.log("ENTRA");
    e.preventDefault();
    if (search.value === loggedInUser.user) {
      alert("Can't search your own username");
      return;
    } else {
      axios
        .get(`/api/users/${search.value}`)
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
    <>
      <div>
        <div className="container is-fluid columns">
          <p>Enter another username:</p>
          <form onSubmit={handleSubmit}>
            <label className="label my-3">Search</label>
            <input
              {...search}
              className="input my-3"
              type="text"
              placeholder="Search here"
            />
          </form>
          <Users searchedUser={searchedUser} />
        </div>
      </div>
    </>
  );
}

export default SearchUsers;
