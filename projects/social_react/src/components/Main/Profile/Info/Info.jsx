import s from "./Info.module.css";

const Info = (props) =>{
    return (
        <div className={s.profile}>
            <div className={s.cover}>
                <img src="http://www.catsmob.com/post/2012/06/01089/creative_facebook_timeline_covers_013.jpg" alt=""/>
            </div>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src="https://bipbap.ru/wp-content/uploads/2015/10/dog-selfie.jpg" alt=""/>
                </div>
                <div className={s.about}>
                    <p className={s.name}>
                        Dmitry K.
                    </p>
                    <p className={s.bio}>
                        Date of Birth" 2 January <br/>
                        City: Minsk <br/>
                        Education: BSU'11 <br/>
                        Web Site: https://samuraijs.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info;