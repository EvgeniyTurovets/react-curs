import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator}  from '../../../redux/profile-reducer';

const Posts = (props) =>{
    let posts = props.postsData.map(p => <Post mess={p.mess} like={p.like} id={p.id}/>)
    let newPostElem = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let updatePostChange = () => {
        let text = newPostElem.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return(
        <div>
            <h2>Мои посты</h2>
            <div className={s.posttop}>
                <textarea ref={newPostElem} onChange={updatePostChange} value={props.newPostText}/>
                <div>
                    <button onClick={ addNewPost } className={s.btn}>Опубликовать</button>
                </div>
            </div>
            <div className="posts">
            {posts}
            </div>
        </div>
    )
}

export default Posts;