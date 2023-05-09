import useInput from "../hooks/useInput";
import { Navigate, useNavigate } from "react-router";
import axios from "axios";

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
      .post("/api/signup", {
        name: name.value,
        surname: surname.value,
        user: user.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log("User signed up", res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
        <input type="text" required placeholder="Name" {...name} />

        <input type="text" required placeholder="Surname" {...surname} />

        <input type="text" required placeholder="Username" {...user} />

        <input type="text" required placeholder="Email address" {...email} />

        <input type="text" required placeholder="Password" {...password} />

        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default Signup;
