import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialog-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage:{
            postsData: [
                {id: 1, mess: 'mess1', like: 15},
                {id: 2, mess: 'mess2', like: 20}
            ],
            newPostText: "new post"
        },
        dialogsPage:{
            messageData: [
                {id: 1,text: "Саша"},
                {id: 2,text: "Маша"},
                {id: 3,text: "Даша"},
                {id: 4,text: "Паша"},
            ],
            dialogsData: [
                {id: 1,name: "Саша"},
                {id: 2,name: "Маша"},
                {id: 3,name: "Даша"},
                {id: 4,name: "Паша"},
            ], 
            newMessegeBody: ""
        },
        sidebar: {

        }
    },
    
    _callSub (){
        console.log('state change')
    },
   
    subscribe (observer) {
        this._callSub = observer; // observer(наблюдатель)
    },

    getState() {
        debugger;
        return this._state;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        
        this._callSub(this._state);

    }
}

export default store;
window.store = store;