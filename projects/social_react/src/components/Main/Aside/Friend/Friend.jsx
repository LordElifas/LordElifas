import s from  './Friend.module.css';

const Friend = (props) => {
    return (
        <div>
            <li className={s.friend}>
                <img src="https://www.publicdomainpictures.net/pictures/310000/nahled/yellow-circle.png" alt=""/>
                <p>{props.friendName}</p>
            </li>
        </div>
    )
}

export default Friend;