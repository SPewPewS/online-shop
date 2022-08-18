import React from 'react';
import s from "./Product.module.css"
import plus from "../../assets/images/plus.png"
import axios from "axios";
import {catsApi} from "../../api/api";

const Product = ({breed}) => {


    return (

        <div className={s.product}>
            <div className={s.card}>
                <div className={s.photo}>

                </div>

            </div>
            <div className={s.breed}>
                <b>Порода:</b> {breed}
                <div><b>Цена</b>: 1111 </div>
            </div>
            <div className={s.btnContainer}>
                <button className={s.myBtn}>В корзину</button>
            </div>





        </div>

    );
};

export default Product;