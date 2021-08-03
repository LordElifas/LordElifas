import s from './Comment.module.css';

const Comment = (props) => {


    return (
        <div className={s.comment}>
            <img src="https://www.publicdomainpictures.net/pictures/310000/nahled/yellow-circle.png" alt=""/>
            <p className={s.commentText}>{props.post}</p>
            <span className={s.commentLikes}>{props.likes} likes</span>
        </div>
    )
}

export default Comment;