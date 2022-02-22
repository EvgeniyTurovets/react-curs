import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';

const Posts = (props) =>{
    
    let posts = props.postsData.map(p => <Post mess={p.mess} like={p.like} id={p.id}/>)
    let newPostElem = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let updatePostChange = () => {
        let text = newPostElem.current.value
        props.updateNewPostText(text)
    }

    return(     
        <div>   
            <h2>Мои посты</h2>   
            <div className={s.posttop}>   
                <textarea ref={newPostElem} onChange={updatePostChange} value={props.newPostText}/> 
                <div>
                    <button onClick={ onAddPost } className={s.btn}>Опубликовать</button>
                </div>
            </div>
            <div className="posts">
            {posts}
            </div>
        </div>
    )
}

export default Posts;