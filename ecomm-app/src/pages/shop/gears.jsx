import React from "react";
import { GEARS } from '../../products'
import { Product } from "./product"
import "./shop.css"


export const Gears = () =>{
    return (
    <div className="shop">
        <div className="products">
            {GEARS.map((product, index) => (
                <Product key={index} data={product}/>
            ))}
        </div>
    </div>
    );
}