import React from 'react';
import Posts from './Posts'
import {addPostActionCreator, updateNewPostTextActionCreator}  from '../../../redux/profile-reducer';

import {connect} from 'react-redux';

// const PostsContainer = (props) =>{
//     return(
//         <StoreContext.Consumer> 
//             {
//                 (store) =>{
//                     let state = store.getState()
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
                
//                     let updatePostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action)
//                     }

//                     return(
//                         <Posts updateNewPostText={updatePostChange} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) =>{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;