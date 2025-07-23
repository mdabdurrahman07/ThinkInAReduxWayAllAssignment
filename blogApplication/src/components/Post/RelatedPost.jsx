import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../Redux/features/relatedBlogs/relatedBlogsSlice";
import { Link } from "react-router-dom";

const RelatedPost = ({ tags, id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }));
  }, [dispatch, id, tags]);

  const { relatedBlog } = useSelector((state) => state.relatedBlogs);
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      {relatedBlog.length > 0 ? (
        relatedBlog.map((blog) =>  <div key={blog?.id} className="space-y-4 related-post-container">
          {/* <!-- related post  --> */}
          <div className="card">
            <Link to={`/posts/${blog?.id}`}>
              <img src={blog?.image} alt={blog?.title} />
            </Link>
            <div className="p-4">
              <Link to={`/posts/${blog?.id}`}
                className="text-lg post-title lws-RelatedPostTitle"
              >
                {blog?.title}
              </Link>
              <div className="flex gap-2 flex-wrap mt-1 tags">
              {blog?.tags.map((tag, idx) => (
            <div className="tags" id="lws-singleTags" key={idx}>
              #{tag}
            </div>
          ))}
              </div>
              <p>{blog?.createdAt}</p>
            </div>
          </div>
          {/* <!-- related post ends --> */}
        </div>)
       
      ) : (
        <div>No related blog found</div>
      )}
    </aside>
  );
};

export default RelatedPost;
