import s from './Messages.module.css';
import Message from "./Message/Message";
import DialogName from "./Dialog/Dialog";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../../redux/messagesReducer";

const Messages = (props) => {

    let dialogsData = props.messagesPage.dialogs.map(d => <DialogName dialogName={d.name} dialogId={d.id}/>);
    let messagesData = props.messagesPage.messages.map(m => <Message dialogMessage={m.message} messageId={m.id}/>);

    let newMessageBody = props.messagesPage.newMessageBody;
    let sendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let newMessageChange = (e) => {
        let newMessage = e.target.value;
        props.dispatch(updateMessageActionCreator(newMessage));
    }
    return (
        <div>
            <h2>DIALOGS</h2>
            <div className={s.messages}>
                <div className={s.friends}>
                    {dialogsData}
                </div>
                <div className={s.dialogs}>
                    <div>{messagesData}</div>
                    <div>
                        <div>
                            <textarea value={newMessageBody} onChange={newMessageChange} id="" cols="30" rows="10"
                                      placeholder='Enter your message'> </textarea>
                        </div>
                        <div>
                            <button onClick={sendMessageClick}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;