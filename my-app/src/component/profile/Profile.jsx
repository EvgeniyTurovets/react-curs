import Posts from './Posts/Posts';
import ProfileInfo from './Profileinfo/Profileinfo';
import s from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) =>{
    return(
      <div>
        <ProfileInfo/>
        <PostsContainer store={props.store}/>
      </div>
    );
}

export default Profile;