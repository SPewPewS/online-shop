import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <div>
                    <NavLink className={s.about} to='/*'>About</NavLink>
                </div>
                <div>
                    <NavLink className={s.about} to='/*'>Contacts</NavLink>
                </div>


            </div>


        </div>
    );
};

export default Navbar;