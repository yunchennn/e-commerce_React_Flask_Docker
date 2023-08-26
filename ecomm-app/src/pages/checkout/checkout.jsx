import React, {useContext} from 'react'
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products"
import {CartItem} from './checkout-item'
import {Ship} from './ship'

export const Checkout =() =>{
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

    return (
        <div className="cart">
            <div>
                <br/>
                <h1>Checkout</h1>
                <hr/>
            </div>
            <div className='checkoutpage'>   
                <div className="cartItems">
                    {PRODUCTS.map((product) =>{
                        if (cartItems[product.id] !== 0){
                            return <CartItem data={product}/>;
                        }

                    })}
                    <hr/>
                    <div className="totalprice">
                        <div className='subtotal'>
                            <h2>Subtotal:</h2> 
                            <h2> ${totalAmount}</h2>
                        </div>
                        <div className='subtotal'>
                            <h2>Shipping:</h2> 
                            <h2>$5</h2>
                        </div>
                        <div className='subtotal'>
                            <h2>Total:</h2> 
                            <h2> ${totalAmount+5}</h2>
                        </div>
                    </div>
                
                </div>
                <div className="checkout">
                    <Ship/>
                </div>
            </div>
            
        </div>
        );
};

