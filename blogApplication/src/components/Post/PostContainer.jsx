import React from "react";
import PostCard from "./PostCard";

const PostContainer = () => {
  return (
    <div>
      <main className="post-container" id="lws-postContainer">
        {/* <!-- single post --> */}
        <PostCard />
        {/* <!-- Single Post Ends --> */}
      </main>
    </div>
  );
};

export default PostContainer;
