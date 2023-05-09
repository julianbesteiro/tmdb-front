import { useParams } from "react-router";

const Card = ({ content }) => {
  const { type, contentId } = useParams();

  const selectedContent = content.filter((content) => {
    return content.id === Number(contentId);
  });

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <div className="media-content">
              <p className="title is-3">
                {type === "movie"
                  ? selectedContent[0].title
                  : selectedContent[0].name}
              </p>
              <p className="title is-6">{selectedContent[0].overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
