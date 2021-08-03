import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const DialogName = (props) => {
    let path="/messages/" + props.dialogId;
    return (
        <div className={s.dialogName}>
            <NavLink to={path}>
                {props.dialogName}
            </NavLink>
        </div>
    )
}

export default DialogName;