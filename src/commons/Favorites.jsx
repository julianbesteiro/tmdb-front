function Favorites({ fav, i, removeFromFavorites }) {
  return (
    <div>
      <p className="title is-3">{fav}</p>
      <p onClick={() => removeFromFavorites(fav)}>
        <u>Remove from favorites</u>
      </p>
    </div>
  );
}

export default Favorites;
