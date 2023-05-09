import axios from "axios";
import useInput from "../hooks/useInput";
import { useState } from "react";
import Users from "../commons/Users";

function SearchUsers() {
  const search = useInput();
  const [searchedUser, setSearchedUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`/api/users/${search.value}`)
      .then((res) => res.data)
      .then((users) => setSearchedUser(users))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div className="container is-fluid columns">
          <p>Enter something:</p>
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
