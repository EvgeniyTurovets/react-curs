const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initState = {
    postsData: [
        {id: 1, mess: 'mess1', like: 15},
        {id: 2, mess: 'mess2', like: 20}
    ],
    newPostText: "new post"
}

const profileReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost ={
                id: 5,
                mess: state.newPostText,
                like: 0
            }

            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = ''
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }   
        default:
            return state;    
    }
}

//action creators
export const addPostActionCreator = () =>({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
)
export default profileReducer;