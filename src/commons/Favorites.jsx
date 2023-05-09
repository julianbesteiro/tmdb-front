function Favorites({ fav, i, removeFromFavorites, type }) {
  return (
    <div>
      <p className="title is-3">{fav}</p>
      <p onClick={() => removeFromFavorites(fav, type)}>
        <u>Remove from favorites</u>
      </p>
    </div>
  );
}

export default Favorites;
