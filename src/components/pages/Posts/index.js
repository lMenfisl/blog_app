import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Post from '../../shared/Post'
import { getPosts } from './service'
import './style.scss';

const Posts = (props) => {

const{posts,setPost}= props;


    useEffect(() => {
        getPosts()
            .then(data => {
                setPosts(data);
            })
    }, [setPosts]);

    return (
        <div className="posts">
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Posts: state.posts.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPosts: posts => dispatch({ type: 'SET_POSTS', posts })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);