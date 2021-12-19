import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/messElements';
import {updateNewMessegeBodyCreator,sendMessCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {
//     return(
//         <StoreContext.Consumer>
//             {
//                 (store) =>{
//                     let state = store.getState().dialogsPage;

//                     let onClickSendMess = () =>{
//                         store.dispatch(sendMessCreator())
//                     }
                
//                     let onNewMessChange = (body) => {
//                         store.dispatch(updateNewMessegeBodyCreator(body))
//                     }
//                     return( <Dialogs updateNewMessegeBody={onNewMessChange} sendMess={onClickSendMess} state={state}/> )
//                 }
               
//             }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) =>{
    return {
        state: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessegeBody: (body) => {
            dispatch(updateNewMessegeBodyCreator(body))
        },
        sendMess: ()=>{
            dispatch(sendMessCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;