import React from "react";
import { BUNDLES } from '../../products'
import { Product } from "./product"
import "./shop.css"


export const Bundles = () =>{
    return (
    <div className="shop">
        <div className="products">
            {BUNDLES.map((product, index) => (
                <Product key={index} data={product}/>
            ))}
        </div> 
    </div>
    
    );
}