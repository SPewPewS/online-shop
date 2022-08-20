import React, {useEffect} from 'react';
import Product from "../Product";
import {useDispatch, useSelector} from "react-redux";
import {catsApi} from "../../../api/api";
import {setCats} from "../../../redux/cats-reducer";

const Products = () => {
    const cats = useSelector(state => state.cats.cats);

    const dispatch = useDispatch();

    useEffect(() => {
        catsApi.getCats()
            .then(response => {
                debugger
                console.log(response)
                dispatch(setCats(response))
                console.log(cats)
            })

    },[]);
    return (
        <div className={"products"}>
            {cats.map(cat => (
                <Product key={cat.id} cats={cat.id} breed={cat.breed}/>
            ))}



        </div>
    );
};

export default Products;