import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPost } from '../../shared/handlers/postApiService';

import './style.scss';

const Post = (props) => {

    useEffect(() => {
        const id = props.match.params.id;

        getPost(id).then(data => {
            props.setPost(data);
        });
    }, []);


    const{
        id,
        title,
        description,
        data_update,
        user:{name},
    }= props.post;

    const date = new Date(data_update);
    const dateUpdate = date.toLocaleDateString();


    return (
        <div className="postPage">
            <h1 className="post_title">{title} {id}</h1>
            <p className="post_description">{dateUpdate}</p>
            <p className="post_description">Author: {name}</p>
            <p className="post_description">{description}</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPost: post => dispatch({ type: 'SET_POST', post })
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);