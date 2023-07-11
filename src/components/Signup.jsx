import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import axios from "axios";
import { Button, TextField } from "@mui/material";
require("dotenv").config();

const url = process.env.URL;

const Signup = () => {
  const navigate = useNavigate();

  const name = useInput();
  const surname = useInput();

  const user = useInput();

  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${url}/api/signup`,
        {
          name: name.value,
          surname: surname.value,
          user: user.value,
          email: email.value,
          password: password.value,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        console.log("User signed up if it was not in database", res.data);
        navigate("/login");
        alert("Please login now");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <br />
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Create your account
      </h2>
      <form className="mt-8" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          required
          {...name}
          sx={{ marginTop: "10px" }}
        />

        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          type="text"
          required
          {...surname}
          sx={{ marginTop: "10px" }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          required
          {...user}
          sx={{ marginTop: "10px" }}
        />
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
          SIGN UP
        </Button>
      </form>
    </>
  );
};

export default Signup;
