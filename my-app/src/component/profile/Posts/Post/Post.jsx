import s from './Post.module.css';
const Post = (props) =>{
    return(
        <div className={s.item}>
            {props.mess}
            <div className="like">{props.like}</div>
        </div>   
    )
}

export default Post;