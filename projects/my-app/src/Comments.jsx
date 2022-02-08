import Comment from "./Comment";
import { useState, useEffect } from "react";
import { commentCreate } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';

function Comments(props) {
    const dispatch = useDispatch();

    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })
    const handleInput = (e) => {
        setTextComment(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment('');
    }

    return(
        <div className='card-comments'>
            <form className='comments-item' onSubmit={handleSubmit}>
                <input type='text' placeholder="write your comment" value={textComment} onChange={handleInput}/>
                <input type='submit' />
            </form>
            {!!comments.length && comments.map(comment => {
                return <Comment key={comment.id} data={comment} />
            })}
        </div>
    )
}
export default Comments;