import s from './Comments.module.css';
import Comment from "./Comment/Comment";



const Comments = (props) => {
    let newCommentData = props.posts.map(c => <Comment post={c.post} likes={c.likes}/>)

    return (
        <div className={s.comments}>
            {newCommentData}
        </div>
    )
}

export default Comments;