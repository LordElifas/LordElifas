import s from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <img src="../../logo.svg" alt=""/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;