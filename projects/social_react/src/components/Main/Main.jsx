import Aside from './Aside/Aside';
import Profile from './Profile/Profile';
import Messages from "./Messages/Messages";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import s from './Main.module.css';
import {Route} from "react-router-dom";

const Main = (props) => {
    debugger;
    return (
            <main className={s.main}>
                <Aside friendsPage={props.friendsPage}/>
                <div className={s.content}>
                    <Route path="/profile" render={ () => <Profile profilePage={props.profilePage} dispatch={props.dispatch} /> } />
                    <Route path="/messages" render={ () => <Messages messagesPage={props.messagesPage} dispatch={props.dispatch}/> } />
                    <Route path="/news" render={ () => <News /> } />
                    <Route path="/music" render={ () => <Music /> } />
                    <Route path="/settings" render={ () => <Settings /> } />
                </div>
            </main>
    )
}

export default Main;