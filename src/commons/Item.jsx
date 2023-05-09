function Item({ content, i, addToFavorites, type }) {
  const imageRoute = `https://image.tmdb.org/t/p/w500/${content.poster_path}`;

  const contentTitle = type === "movie" ? content.title : content.name;

  return (
    <div>
      <div>{i + 1}</div>

      <div>
        <span>{contentTitle}</span>
        <p
          onClick={(e) => {
            e.preventDefault();
            addToFavorites(contentTitle, content.id);
          }}
        >
          <u>Add to favorites</u>
        </p>
        <img
          src={content.poster_path ? imageRoute : " "}
          alt="Content poster"
        />
      </div>
    </div>
  );
}

export default Item;
