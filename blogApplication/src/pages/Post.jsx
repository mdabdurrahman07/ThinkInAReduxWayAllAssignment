import PostCardDescription from "../components/Post/PostCardDescription";
import RelatedPost from "../components/Post/RelatedPost";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import { fetchBlog } from "../Redux/features/blog/blogSlice";
const Post = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [blogId, dispatch]);

  const { blog, isError, isLoading, error } = useSelector(
    (state) => state.blog
  );

  const { tags, id } = blog || {};

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isError && !isLoading && blog?.length === 0) {
    content = <div className="col-span-12">No Blog found</div>;
  } else {
    content = (
      <div className="post-page-container">
        <PostCardDescription blog={blog} />
        <RelatedPost tags={tags} id={id} />
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Post;
