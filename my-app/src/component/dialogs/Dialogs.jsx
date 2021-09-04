import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/messElements';
import {updateNewMessegeBodyCreator,sendMessCreator} from '../../redux/dialog-reducer';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messElements = state.messageData
    .map(mess => <Message text={mess.text} id={mess.id}/>);

    let newMessegeBody = state.newMessegeBody

    let onClickSendMess = () =>{
        props.store.dispatch(sendMessCreator())
       
    }

    let onNewMessChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessegeBodyCreator(body))
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogElements}
            </div>
            <div className={s.messeges}>
                <div>
                    {messElements}
                </div>
                <div>
                    <div>
                        <textarea 
                        value={newMessegeBody} 
                        onChange={onNewMessChange}
                        placeholder="Enter your messege"></textarea>
                    </div>
                    <div>
                        <button onClick={onClickSendMess}>Send</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Dialogs;