import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";
import{About} from"./pages/about/about"
import {Shop} from './pages/shop/shop'
import {Coffee} from './pages/shop/coffee'
import {Bundles} from './pages/shop/bundles'
import {Gears} from './pages/shop/gears'
import {Goods} from './pages/shop/goods'
import {Cart} from './pages/cart/cart'
import { Checkout } from './pages/checkout/checkout';
import { ShopContextProvider } from './context/shop-context';
import {Signin} from './pages/login/signin'
import ScrollButton from './components/ScrollButton';
import { Thankyou } from './pages/checkout/thankyou';

function App() {
  
  return (
    <div className="App">
      {/* <MyComponent/> */}
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/coffee" element={<Coffee/>}/>
            <Route path="/bundles" element={<Bundles/>}/>
            <Route path="/goods" element={<Goods/>}/>
            <Route path="/gears" element={<Gears/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/login' element={<Signin/>}/>
            <Route path='/thank-you' element={<Thankyou/>}/>
          </Routes>
          <ScrollButton/>
          <Footer/>
        </Router>

      </ShopContextProvider>
      
    </div>
    
  );
}

export default App;
