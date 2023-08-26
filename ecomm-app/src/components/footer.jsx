import React from "react";
import "./footer.css";
import myImage from "../images/logo4.png";

import {Envelope, PhoneCall, FacebookLogo,TwitterLogo,InstagramLogo } from "phosphor-react"


export const Footer = () =>{
    return (
        <div className="footer"> 
            <div className="infos">
                {/* <img src={myImage} alt="Footer Icon"/> */}
                <div className="each">
                    <h1>CONTACT US</h1>
                    <a href="mailto:erinchen940428@gmail.com"><Envelope size={26} />erinchen940428@gmail.com</a>
                    <a href="mailto:erinchen940428@gmail.com"><PhoneCall size={26} /> +1(631) 681-2515</a>
                </div>

                <div className="each">
                    <h1>FOLLOW US</h1>
                    <a href="https://www.facebook.com/yun.chen.5817/"> <FacebookLogo size={32} />@PoGoods Facebook</a>
                    <a href="https://instagram.com/yunchennn_?igshid=NTc4MTIwNjQ2YQ=="><InstagramLogo size={32} />@PoGoods Instagram</a>
                    <a href="https://instagram.com/yunchennn_?igshid=NTc4MTIwNjQ2YQ=="><TwitterLogo size={32} />@PoGoods Twitter</a>
                </div>
            </div>
            <div className="footimage">
                <img src={myImage} alt='logo'/>
            </div>
            
        </div>
    );
}