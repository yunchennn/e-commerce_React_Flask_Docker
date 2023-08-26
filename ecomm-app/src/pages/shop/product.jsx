import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './shop.css'


export const Product = (props) =>{
    const {id, productName, price, productImage, productImage2} = props.data;
    // console.log('This is a log message',productImage2)
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    // console.log(cartItemAmount)
    return (
        <div className="product">
            <div className="image">
                <img src={productImage} alt="first pic"/>
                <img src={productImage2} className="img-top" alt="sec pic"/>
            </div>
            
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                    ${price}
                </p>

            </div>
            <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add To Cart {cartItemAmount>0 &&<>({cartItemAmount})</>}</button>
        </div>
    );
};
