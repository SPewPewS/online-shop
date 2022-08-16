import React from 'react';
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={"headerContainer"}>
                <header className={"itemContainer"}>
                    <div className={"headerItem"}>ewdsnpm</div>
                    <div className={"headerItem"}>ewdsnpm</div>
                    <div className={"headerItem"}>ewdsnpm</div>
                </header>

            </div>
            <div className={s.cart}>
                Корзин

            </div>
        </div>
    );
};

export default Header;