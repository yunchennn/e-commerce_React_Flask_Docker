import React from "react";
import {Link} from "react-router-dom"
import {ShoppingCart, Storefront, House, UserCircle, SignOut} from "phosphor-react"
import "./navbar.css";
import myImage from "../images/logo3.png"
import {useAuth} from '../pages/login/AuthContext'


export const Navbar = () =>{
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout(); // Clear user information when logging out
      };

    return (
        <div className="navbar"> 
            <div className="topBar">
                <div className="dropdown">
                    <div className="logo">
                        <Link to='/'>
                            <img className="image" src={myImage} alt="Footer Icon"/>
                        </Link>
                    </div>
                    <div className="topitems">
                        <div className="dropitems">
                            <Link to="/shop">-All Products-</Link>
                            <div className="dropdown-content">
                                <div className='each'>
                                    <Link to="/coffee">COFFEE</Link>
                                    <Link to="/bundles">BUNDLES</Link>
                                    <Link to="/goods">GOODS</Link>
                                    <Link to="/gears">GEARS</Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="dropitems">
                            <Link>-Our Story-</Link>
                        </div>
                        <div className="dropitems">
                            <Link>-Our Design-</Link>
                        </div> 
                    </div>            
                </div>
            </div>
            
            
            <div className="links" >
                <div className="line1">
                    {user ? (
                        <div className="user-link">
                            <div>
                                <UserCircle className="icon-link" size={16} />
                                {user.username}
                            </div>
                            <div>
                            <Link onClick={handleLogout} className="icon-link">
                                <SignOut className="icon" size={16} />
                                LOGOUT
                            </Link>
                            </div>
                            
                        </div>
                    ) : (
                        <Link to="/login" className="icon-link">   
                            <UserCircle className="icon" size={16} />
                            LOGIN
                        </Link>
                    )}
                </div>
                <div className="line2">
                    <Link to="/" className="icon-link">
                        <House className="icon" size={32} />
                    </Link>

                    <Link to="/shop" className="icon-link">
                        <Storefront className="icon" size={32} />
                    </Link>
                    <Link to='/cart' className="icon-link">
                        <ShoppingCart className="icon" size={32} />
                    </Link>
                </div>
                

            </div>
        </div>
    );
}