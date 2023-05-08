import { Link } from "react-router-dom";
import Item from "./Item";

function ListItem({ movies }) {
  return (
    <div className="columns is-multiline layout">
      {movies.map((movie, i) => (
        <div className="column is-4" key={i}>
          <Link to={`/movie/${movie.id}`}>
            <Item movie={movie} i={i} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListItem;
