import { Link } from "react-router-dom";

const PostCard = ({ blog }) => {
  const { id, image, createdAt, likes, tags, title } = blog || {};
  return (
    <div className="lws-card">
      <Link to={`/posts/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/posts/${id}`} className="lws-postTitle">
          {" "}
          {title}{" "}
        </Link>
        <div className="flex gap-2 flex-wrap mt-1">
          {tags.map((tag, idx) => (
            <div className="lws-tags" key={idx}>
              #{tag}
            </div>
          ))}
        </div>

        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default PostCard;
