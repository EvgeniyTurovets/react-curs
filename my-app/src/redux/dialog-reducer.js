const UPDATE_NEW_MESS_BODY = 'UPDATE_NEW_MESS_BODY' 
const SEND_MESS = 'SEND_MESS'

let initState = {
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
}

const dialogsReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESS_BODY:
            state.newMessegeBody = action.body;
            return state;
        case SEND_MESS:
            let body = state.newMessegeBody
            state.newMessegeBody = '';
            state.messageData.push({id:6, text: body})        
        default: 
            return state;
    }
}

//action creators
export const sendMessCreator = () =>({type: SEND_MESS})
export const updateNewMessegeBodyCreator = (body) =>({
    type: UPDATE_NEW_MESS_BODY,
    body: body
})
export default dialogsReducer;