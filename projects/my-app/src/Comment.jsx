import { useState, useEffect } from "react";
import { commentUpdate, commentDelete} from "./redux/actions";
import { useDispatch } from "react-redux";

function Comment({ data }) {
    const dispatch = useDispatch();

    const [commentText, setCommentText] = useState('');
    const { text, id } = data;

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(commentUpdate(commentText, id));
    }

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(id));
    }

    return (
        <div className='card'>
            <form onSubmit={handleUpdate} className='comment'>
                <input  type="text" value={commentText} onChange={handleInput}/>
            </form>
            <div className='comment-actions'>
                <div onClick={handleDelete} className='comments-item-delete'>
                    Delete
                </div>
                <div>
                    Change
                </div>
            </div>
        </div>
    )
}

export default Comment;