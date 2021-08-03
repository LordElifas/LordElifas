import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
        <div className="page">
            <Header />
            <Main profilePage={props.state.profilePage}
                  messagesPage={props.state.messagesPage}
                  friendsPage={props.state.friendsPage}
                  dispatch={props.dispatch}
            />
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
