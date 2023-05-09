import UserFavorites from "./UserFavorites";
import { Link } from "react-router-dom";

function Users({ searchedUser }) {
  return (
    <div className="columns is-multiline layout">
      {!searchedUser ? (
        ""
      ) : (
        <>
          {searchedUser.length === 0
            ? "No results"
            : searchedUser.map((user, i) => (
                <p key={i}>
                  <Link to={`/users/${user}`}>
                    <u> {user}</u>
                  </Link>
                </p>
              ))}
        </>
      )}
    </div>
  );
}

export default Users;
