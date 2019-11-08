import React from 'react';
import './style.scss';
import { descriptions } from 'jest-config';

const Post = props => {

    const {
        title,
        date_update,
        likes,
        description,
        user:{name},
     } = props.post;

     const date=new Date(date_update);
     const dateUpdate=date.toLocaleDateString();
    return (

        <div className="post">
            <i>{date_update}</i>
            <span>{likes}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Post;