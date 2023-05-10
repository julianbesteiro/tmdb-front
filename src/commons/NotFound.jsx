import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found. Please try with a different URL. Thank you</h1>
      <Link to="/">
        <h2>
          {" "}
          <u>Click here to go back to homepage</u>
        </h2>
      </Link>
    </>
  );
};

export default NotFound;
