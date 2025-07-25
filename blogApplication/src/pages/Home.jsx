import React from 'react';
import PostContainer from '../components/Post/PostContainer';
import FilterMenuContainer from '../components/FilterMenu/FilterMenuContainer';

const Home = () => {
    return (
        <div className='wrapper'>
        <FilterMenuContainer/>
        <PostContainer/>
        </div>
    );
};

export default Home;