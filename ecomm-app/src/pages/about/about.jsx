import React from "react";
import "./about.css"
import {useNavigate} from "react-router-dom"
import backgroundVideo from '../../images/pogoodsvideo.mp4';
import MapComponent from './googlemap'
import {Link} from "react-router-dom"


export const About = () =>{
    const navigate = useNavigate()
    return (
        <div className="about">
            <div className="video-container">
                <video autoPlay loop muted className="video-background">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div className="aboutus">
                <h1>About Us</h1>
                <p>
                    At PoGoods, we are more than just a coffee shop. We are a
                    community of coffee enthusiasts dedicated to providing you with the
                    finest quality coffee experience. Our cozy coffee shop is nestled in the
                    heart of Stony Brook, where we invite you to come and experience the
                    warm embrace of our unique coffee culture.
                </p>

                <p>
                    Our coffee beans are carefully sourced from around the world, ensuring
                    that only the highest quality beans find their way into your cup. We
                    take pride in our artisanal approach to roasting, as our experienced
                    roasters employ time-honored methods to bring out the nuanced flavors
                    that make each sip memorable.
                </p>
                <p>
                    What sets us apart is our commitment to providing not just great coffee,
                    but an environment that fosters connections. Whether you're here for a
                    quick caffeine boost or to unwind with friends, our cozy atmosphere and
                    welcoming staff make every visit a special one.
                </p>
                <div>
                
                    <h1>Why Choose Us</h1>
                    <p><strong>Quality Ingredients</strong>
                        : We source the finest beans from around the world and carefully
                        craft our beverages to ensure every sip is a delight to your senses.
                    </p>
                    <p><strong>Expert Baristas</strong>
                        : Our skilled baristas are dedicated to perfecting every cup of coffee,
                        ensuring that you experience the full depth of flavors in every sip.
                    </p>
                    <p><strong>Cozy Atmosphere</strong>
                        : Our coffee shop is designed to be a welcoming and comfortable space
                        where you can relax, socialize, or work while enjoying your coffee.
                    </p>
                    <button className="goToShop" onClick={()=>navigate("/shop")}>Go Shopping!</button>
                    <br></br>
                    <br></br>
                </div> 
            </div>
            
            <div>
                <MapComponent/>
            </div>
            <div className="joinUs">
                <div className="txtpart">
                    <Link className='join_link' to='/login' style={{ textDecoration: 'none' }}>
                        <h1 className='join'>Join Us!</h1>
                    </Link>
                </div>
            </div>

        </div>
    
    );
}