import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../Redux/features/blogs/blogsSlice";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const PostContainer = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  
  const { blogs, isError, isLoading, error } = useSelector(
    (state) => state.blogs
  );
  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && blogs?.length === 0) {
    content = <div className="col-span-12">No Blogs found</div>;
  } else {
    content = blogs.map((blog) => <PostCard key={blog.id} blog={blog} />);
  }

  return (
    <div>
      <main className="post-container" id="lws-postContainer">
        {content}
      </main>
    </div>
  );
};

export default PostContainer;
