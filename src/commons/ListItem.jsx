import { Link } from "react-router-dom";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { addToFavoritesDispatch } from "../store/user";

function ListItem({ content, type }) {
  const dispatch = useDispatch();

  const addToFavorites = (contentTitle, id) => {
    let newFav = `${type[0]}${contentTitle} (ID ${id})`;
    dispatch(addToFavoritesDispatch(newFav));
  };

  return (
    <div className="columns is-multiline layout">
      {content.map((content, i) => (
        <div className="column is-4" key={i}>
          <Link to={`/detail/${type}/${content.id}`}>
            <Item
              content={content}
              i={i}
              addToFavorites={addToFavorites}
              type={type}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListItem;
