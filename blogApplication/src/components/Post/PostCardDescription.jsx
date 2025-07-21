import Loading from "../Loading/Loading";
const PostCardDescription = ({ blog }) => {
  const { title, isSaved, likes, image, tags, description } = blog || {};

  return (
    <div className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="flex gap-2 flex-wrap mt-1">
          {tags.map((tag, idx) => (
            <div className="tags" id="lws-singleTags" key={idx}>
              #{tag}
            </div>
          ))}
        </div>

        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> Saved
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCardDescription;
