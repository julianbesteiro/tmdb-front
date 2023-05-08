import { useParams } from "react-router";

const Card = ({ movies }) => {
  const { movieId } = useParams();

  const selectedMovie = movies.filter((movie) => {
    return movie.id === Number(movieId);
  });

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-3">{selectedMovie[0].title}</p>
              <p className="title is-6">{selectedMovie[0].overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
