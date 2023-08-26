import React from "react";
import { GOODS } from '../../products'
import { Product } from "./product"
import "./shop.css"


export const Goods = () =>{
    return (
    <div className="shop">
        <div className="products">
            {GOODS.map((product, index) => (
                <Product key={index} data={product}/>
            ))}
        </div>
    </div>
    );
}