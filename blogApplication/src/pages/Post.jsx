import React from 'react';
import PostCardDescription from '../components/Post/PostCardDescription';
import RelatedPost from '../components/Post/RelatedPost';

const Post = () => {
    return (
        <div className='post-page-container'>
        <PostCardDescription/>
        <RelatedPost/>
        </div>
    );
};

export default Post;