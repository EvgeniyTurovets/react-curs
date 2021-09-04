import Posts from './Posts/Posts';
import ProfileInfo from './Profileinfo/Profileinfo';
import s from './Profile.module.css';

const Profile = (props) =>{
  
    return(
      <div>
        <ProfileInfo/>
        <Posts dispatch={props.dispatch} newPostText={props.profilePage.newPostText} postsData = {props.profilePage.postsData} addPost={props.addPost}/>
      </div>
    );
}

export default Profile;