import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedInUser } from "../store/loggedInUser";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();

  const userToDisplay = loggedInUser.user;
  const handleClick = () => {
    axios
      .post("/api/logout")
      .then((res) => {
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

  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => dispatch(setLoggedInUser(res.data)))
      .catch(() => console.error("You are not logged in"));
  }, []);

  console.log("USERTODISPLAY", userToDisplay);

  return (
    <>
      <div>
        <div className="container is-fluid columns">
          <p>Navbar</p>
          <Link to="/search">
            <button>SEARCH MOVIES</button>
          </Link>
          {userToDisplay ? (
            <div>
              <p>Hello {userToDisplay}</p>
              <button onClick={handleClick}>LOGOUT</button>
            </div>
          ) : (
            <>
              <Link to="/signup">
                <button>SIGN UP</button>
              </Link>
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
