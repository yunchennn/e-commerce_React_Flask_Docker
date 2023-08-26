import React from "react";
import { PRODUCTS } from '../../products'
import { Product } from "./product"
import "./shop.css"

// console.log(PRODUCTS)
export const Shop = () =>{
    // console.log(PRODUCTS)
    return (
    <div className="shop">
        <div className="products">
            {PRODUCTS.map((product, index) => (
                <Product  key={index} data={product}/>
            ))}
        </div>
    </div>
    );
}