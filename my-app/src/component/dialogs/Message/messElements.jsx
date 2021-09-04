import s from './../Dialogs.module.css';

const Message = (props) =>{
    return(
        <div className="s.messeges__item">{props.text}</div>
    );
}


export default Message;