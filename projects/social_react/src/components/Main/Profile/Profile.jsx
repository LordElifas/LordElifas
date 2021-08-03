import s from './Profile.module.css';
import Info from './Info/Info';
import Wall from './Wall/Wall';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.container}>
                <Info />
                <Wall profilePage={props.profilePage} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}
export default Profile;