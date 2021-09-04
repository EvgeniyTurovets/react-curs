import { combineReducers, createStore } from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store