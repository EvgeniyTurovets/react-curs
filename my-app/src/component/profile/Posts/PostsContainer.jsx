import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator}  from '../../../redux/profile-reducer';

const PostsContainer = (props) =>{
    let posts = props.postsData.map(p => <Post mess={p.mess} like={p.like} id={p.id}/>)
    let newPostElem = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let updatePostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return(<Posts updateNewPostText={updatePostChange}/>)
}

export default PostsContainer;