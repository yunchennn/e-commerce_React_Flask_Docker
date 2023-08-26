import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import "./checkout-item.css"

export const CartItem = (props) =>{
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    return(
        <div className="checkoutitem">
            <img src={productImage} alt='product'/>
            <div className="info">
                <div className="item">
                    <p><b>{productName}</b></p>
                    
                    <div className="countHandler">
                        <button onClick={()=> removeFromCart(id)}>-</button>
                        <input value={cartItems[id]} onChange={(e) => updateCartItemCount((e.target.value), id)}/>
                        <button onClick={()=> addToCart(id)}>+</button>
                        
                    </div>
                    
                </div>
                
                
                <div className="price">
                    <p>${price}</p>
                </div>
                
            </div>
            

        </div>
    );
};