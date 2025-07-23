import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegThumbsUp } from "react-icons/fa";

const PostCard = ({ blog }) => {
  const { id, image, createdAt, likes, tags, title, isSaved } = blog || {};
  return (
    <div className="lws-card">
      <Link to={`/posts/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount flex items-center gap-2">
           <FaRegThumbsUp/>
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
          <span className="lws-badge"> {isSaved === true ? 'Saved' : <FaRegBookmark className="text-lg"/>} </span>
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default PostCard;
