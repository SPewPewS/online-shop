import React, {useEffect, useState} from 'react';
import Product from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {catsApi} from "../../../api/api";
import {logDOM} from "@testing-library/react";
import {getCats} from "../../../redux/cats-reducer";

const Products = () => {

    /*const dispatch = useDispatch();
    const cats = useSelector(state => state.cats.cats);*/


    const [cats, setCats] = useState([]);

    useEffect(() => {
        catsApi.getCats()
            .then(response => {
                setCats(response)
            })
    },[]);
  /* catsApi.getCats().then(response => {
       let a = response.length;
           for (let i = 0; i < a; i++){
               console.log(response[i])
           }

}
   )*/

    return (
        <div className={"products"}>
            {cats.map(cat => (
                <Product key={cat.id} cats={cat.id} breed={cat.breed}/>
            ))}



        </div>
    );
};

export default Products;