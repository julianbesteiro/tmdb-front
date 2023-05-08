import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../store/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log("USER LOGGED IN", res.data);
        dispatch(setLoggedInUser(res.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          LOGIN HERE{" "}
        </h2>
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
        <input type="text" required placeholder="Email address" {...email} />

        <input type="text" required placeholder="Password" {...password} />

        <button type="submit">LOGIN</button>
      </form>
    </>
  );
};

export default Login;
