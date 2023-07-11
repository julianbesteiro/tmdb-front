import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../store/user";
import { Button, TextField } from "@mui/material";
const url = "https://tmdb-back-end-02eo.onrender.com";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${url}/api/login`,
        {
          email: email.value,
          password: password.value,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        console.log("User logged in", res.data);
        localStorage.setItem("token", res.token);
        dispatch(setLoggedInUser(res.data));
        navigate("/");
      })
      .catch((err) => {
        alert("Invalid credentials");
        console.log(err);
      });
  };
  return (
    <>
      <br />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        LOGIN HERE{" "}
      </h2>
      <form className="mt-8" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          type="email"
          required
          {...email}
          sx={{ marginTop: "10px" }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
          {...password}
          sx={{ marginTop: "10px" }}
        />
        <br />
        <Button variant="contained" type="submit" sx={{ marginTop: "10px" }}>
          LOGIN
        </Button>
      </form>
    </>
  );
};

export default Login;
