import React from "react";
import { COFFEE } from '../../products'
import { Product } from "./product"
import "./shop.css"

// console.log(COFFEE)
export const Coffee = () =>{
    return (
    <div className="shop">
        <div className="products">
            {COFFEE.map((product, index) => (
                <Product key={index} data={product}/>
            ))}
        </div>
    </div>
    );
}