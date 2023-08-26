import React , {useState, useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import './checkout.css'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useAuth} from '../login/AuthContext'


export const Ship =() =>{
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const {user} = useAuth();
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    const dictionary = {};
    // const history = useHistory();

    for (const item in cartItems){
        if (cartItems[item] >0){
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            const productName = itemInfo.productName;
            const number = cartItems[item];
            dictionary[productName] = number;

        }
    }
    
    
    const [fontData, setFontData] = useState({
        username: '',
        profile: {
            firstName:'',
            lastName:'',
            address:'',
            country:'',
            zipcode:'',
            city:'',
            state:'',
            
        },
        payment:{
            address:'',
            country:'',
            zipcode:'',
            city:'',
            state:'',
            cardFirstName:'',
            cardLastName:'',
            cardNumber:'',
            month:'',
            year:'',
            cvv:'',
        }
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {

          console.log('user:', user)
          setFontData((prevData) => ({
            ...prevData,
            username: user.username,
          }));
    
        try {
          const response = await axios.post('/api/order-submit', fontData);
          console.log(response.data);
          navigate("/thank-you");
        } catch (error) {
          console.error('Error:', error);
        }
      }
      };
      
    
      const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setFontData((prevData) => ({
          ...prevData,
          profile: {
            ...prevData.profile,
            [name]: value,
          },
        }));
      };

      const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setFontData((prevData) => ({
          ...prevData,
          payment: {
            ...prevData.payment,
            [name]: value,
          },
          order:{
            total: totalAmount,
            items: dictionary,
          }
        }));
      };

      const handleSameCheckboxChange = () => {
        if (document.getElementById('same').checked) {
          setFontData((prevData) => ({
            ...prevData,
            payment: {
              ...prevData.payment,
              address: prevData.profile.address,
              country: prevData.profile.country,
              zipcode: prevData.profile.zipcode,
              city: prevData.profile.city,
              state: prevData.profile.state,
            },
          }));
        } else {
          setFontData((prevData) => ({
            ...prevData,
            payment: {
              ...prevData.payment,
              address: '',
              country: '',
              zipcode: '',
              city: '',
              state: '',
            },
          }));
        }
      };


    
    
    return(

        <div className="container">
            
          {user? (
            <form className="form" onSubmit={handleSubmit}>
              <div className="ship">
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
                <hr />
                <label className="field">
                  <span className="field__label" for="username">Member ID</span>
                  <input className="field__input" type="text" name="username" id="username" value={user.username}  readOnly/>
                </label>
                <div className="fields fields--2">
                  <label className="field">
                  <span className="field__label" for="firstname">First name</span>
                  <input className="field__input" type="text" name="firstName" id="firstname" value={fontData.profile.firstName} onChange={handleProfileChange} required/>
                  </label>
                  <label className="field">
                  <span className="field__label" for="lastname">Last name</span>
                  <input className="field__input" type="text" name="lastName" id="lastname" value={fontData.profile.lastName} onChange={handleProfileChange} required/>
                  </label>
                </div>
                <label className="field">
                    <span className="field__label" for="address">Address</span>
                    <input className="field__input" type="text" name="address" id="address" value={fontData.profile.address} onChange={handleProfileChange} required/>
                </label>
                <label className="field">
                    <span className="field__label" for="country">Country</span>
                    <select className="field__input" name="country" id="country" value={fontData.profile.country} onChange={handleProfileChange} required>
                    <option value=""></option>
                    <option value="United States">United States</option>
                    </select>
                </label>
                <div className="fields fields--3">
                    <label className="field">
                    <span className="field__label" for="zipcode">Zip code</span>
                    <input className="field__input" type="text" name="zipcode" id="zipcode" value={fontData.profile.zipcode} onChange={handleProfileChange} required/>
                    </label>
                    <label className="field">
                    <span className="field__label" for="city">City</span>
                    <input className="field__input" type="text" name="city" id="city" value={fontData.profile.city} onChange={handleProfileChange} required/>
                    </label>
                    <label className="field">
                    <span className="field__label" for="state">State</span>
                    <select className="field__input" name="state" id="state" value={fontData.profile.state} onChange={handleProfileChange} required>
                        <option value=""></option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    </label>
                </div>

                </div>

                <div className="payment">
                    <div>
                        <h1>Credit Card Detail</h1>
                        <p>Please enter your payment details.</p>
                        <hr />
                    </div>
                    
                    
                    <div className="fields fields--2">
                        <label className="field">
                        <span className="field__label" for="cardFirstName">First name</span>
                        <input className="field__input" type="text" name="cardFirstName" id="cardFirstName" value={fontData.payment.cardFirstName} onChange={handlePaymentChange} required/>
                        </label>
                        <label className="field">
                        <span className="field__label" for="cardLastName">Last name</span>
                        <input className="field__input" type="text" name="cardLastName" id="cardLastName" value={fontData.payment.cardLastName} onChange={handlePaymentChange} required/>
                        </label>
                    </div>
                    <label className="field">
                    <span className="field__label" for="cardNumber">Card Number</span>
                    <input className="field__input" name="cardNumber" id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" value={fontData.payment.cardNumber} onChange={handlePaymentChange} required/>
                    </label>
                    
                    <div className="fields fields--3">
                        <label className="field">
                        <span className="field__label" for="month">Month</span>
                        <select className="field__input" name="month" id="month" value={fontData.payment.month} onChange={handlePaymentChange} required>
                            <option value=""></option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        </label>
                        <label className="field">
                        <span className="field__label" for="year">Year</span>
                        <select className="field__input" name="year" id="year" value={fontData.payment.year} onChange={handlePaymentChange} required>
                            <option value=""></option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2016">2025</option>
                            <option value="2017">2026</option>
                            <option value="2018">2027</option>
                            <option value="2019">2028</option>
                            <option value="2020">2029</option>
                            <option value="2021">2030</option>
                            <option value="2022">2031</option>
                            <option value="2023">2032</option>
                            <option value="2024">2033</option>
                            <option value="2024">2034</option>
                        </select>
                        </label>
                        <label className="field">
                        <span className="field__label" for="cvv">CVV</span>
                        <input className="field__input" type="text" name="cvv" id="cvv" value={fontData.payment.cvv} onChange={handlePaymentChange} required/>
                        </label>
                    
                    </div>

                    <div className="samecheckbox">
                        <h2>Billing Address</h2>
                        <input type="checkbox" id="same" name="same" onChange={handleSameCheckboxChange} />
                        <label htmlFor="same">If same secondary address select this box.</label>
                    </div>

                    <label className="field">
                        <span className="field__label" for="address">Address</span>
                        <input className="field__input" type="text" name="address" id="address" value={fontData.payment.address} onChange={handlePaymentChange} required/>
                    </label>
                    <label className="field">
                        <span className="field__label" for="country">Country</span>
                        <select className="field__input" name="country" id="country" value={fontData.payment.country} onChange={handlePaymentChange} required>
                        <option value=""></option>
                        <option value="United States">United States</option>
                        </select>
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                        <span className="field__label" for="zipcode">Zip code</span>
                        <input className="field__input" type="text" name="zipcode" id="zipcode" value={fontData.payment.zipcode} onChange={handlePaymentChange} required/>
                        </label>
                        <label className="field">
                        <span className="field__label" for="city">City</span>
                        <input className="field__input" type="text" name="city" id="city" value={fontData.payment.city} onChange={handlePaymentChange} required/>
                        </label>
                        <label className="field">
                        <span className="field__label" for="state">State</span>
                        <select className="field__input" name="state" id="state" value={fontData.payment.state} onChange={handlePaymentChange} required>
                            <option value=""></option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        </label>
                        {/* <a name="total" id="total" value={fontData.payment.total} onChange={handlePaymentChange}>{totalAmount}</a> */}
                    </div>
                    <div>
                        <button onClick={()=>navigate("/cart")}> Previous Page </button>
                        <button type="submit">Submit</button>
                    </div>
                        
                </div>
                
                
            </form>
                    ):(
                      <div>
                        <a href="/login">LOGIN OR CREATE A ACCOUNT</a>
                        
                      </div>
                    )
                    }
                    
                    
        </div>
       

    );
};

