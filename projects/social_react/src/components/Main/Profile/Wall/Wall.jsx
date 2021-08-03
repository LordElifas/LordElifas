import s from './Wall.module.css';
import React from "react";
import Comments from "./Comments/Comments";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";


const Wall = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.wall}>
            <h2>
                My posts
            </h2>
            <div>
                <div className={s.inputComment}>
                    <input onChange={onPostChange} ref={newPostElement} placeholder="Your news"
                           value={props.profilePage.newPostText}/>
                    <button onClick={addPost} type="button" className={s.submit}>
                        Send
                    </button>
                </div>
            </div>
            <Comments posts={props.profilePage.posts}
                      dispatch={props.dispatch}/>
        </div>
    )
}

export default Wall;