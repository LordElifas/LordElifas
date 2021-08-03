import s from './Aside.module.css';
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";

const Aside = (props) => {
    // let friend = props.friendsList(f => <Friend friendId={f.id} friendName={f.name}/>)
    return (
        <aside className={s.aside}>
            <div className={s.container}>
                <ul className={s.list}>
                    <li>
                        <NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} activeClassName={s.active} to="/messages">Messages</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li>
                        <NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink>
                    </li>
                </ul>
                <div className={s.friends}>
                    <h2>Friends</h2>
                    <ul className={s.friendsList}>
                        {/*{friend}*/}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside;