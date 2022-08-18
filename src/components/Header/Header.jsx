import React from 'react';
import s from "./Header.module.css"
import cat from "../../assets/images/cat.jpg"
import dog from "../../assets/images/dog.jpg"
import parrot from "../../assets/images/parrot.jpg"
import basket from "../../assets/images/basket.png"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={"headerContainer"}>
                <header className={"itemContainer"}>
                    <div className={"headerItem"}>
                        <img className={"cat"} src={cat} alt=""/>
                    </div>
                    <div className={"headerItem"}>
                        <img className={"cat"} src={parrot} />
                    </div>
                    <div className={"headerItem"}>
                        <img className={"cat"} src={dog} />
                    </div>
                </header>


            </div>
            <div className={s.cart}>
                <div>
                    <img src={basket} />

                </div>

            </div>
        </div>
    );
};

export default Header;