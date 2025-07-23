import { FaRegBookmark, FaRegThumbsUp } from "react-icons/fa";
import Loading from "../Loading/Loading";
import {useDispatch} from "react-redux"
import { updateIsSaved, updateLikes } from "../../Redux/features/blog/blogSlice";

const PostCardDescription = ({ blog }) => {
  const dispatch = useDispatch()
  const { title, isSaved, likes, image, tags, description } = blog || {};
  const handleUpdateLike = () =>{
    dispatch(updateLikes(blog))
  }
  const handelUpdateBookmark = () =>{
    dispatch(updateIsSaved(blog))
  }
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
          <button onClick={handleUpdateLike} className="like-btn flex items-center gap-2" id="lws-singleLinks">
            <FaRegThumbsUp/>
                        {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button onClick={handelUpdateBookmark} className="active save-btn" id="lws-singleSavedBtn">
            <span className="lws-badge"> {isSaved === true ? 'Saved' : <FaRegBookmark className="text-lg"/>} </span>
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
