import s from "../Messages.module.css";

const Message = (props) => {
    return (
        <div className={s.dialogItem}>
            <div className={s.dialogAvatar}>
                <img src="src//avatar.png" alt=""/>
                <p className={s.avatarName}>
                    {props.dialogName}
                </p>
            </div>
            <div className={s.dialogMessage}>
                {props.dialogMessage}
            </div>
        </div>
    )
}

export default Message;