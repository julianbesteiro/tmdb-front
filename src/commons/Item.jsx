function Item({ movie, i, addToFavorites }) {
  const imageRoute = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <div>
      <div>{i + 1}</div>

      <div>
        <span>{movie.title}</span>
        <p
          onClick={(e) => {
            e.preventDefault();
            addToFavorites(movie.title, movie.id);
          }}
        >
          <u>Add to favorites</u>
        </p>
        <img src={movie.poster_path ? imageRoute : " "} alt="Movie poster" />
      </div>
    </div>
  );
}

export default Item;
