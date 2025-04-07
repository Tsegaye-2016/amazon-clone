import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './components/Pages/Landing/Landing';
import Payment from './components/Pages/Payment/Payment';
import Orders from './components/Pages/Orders/Orders';
import Cart from './components/Pages/Cart/Cart';
import ProductDetail from './components/Pages/ProductDetail/ProductDetail';
import Results from './components/Pages/Results/Results';
import Auth from './components/Pages/Auth/Auth';
function Routering() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/payments' element={<Payment />}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products/:productId' element={<ProductDetail/>}/>
            <Route path="/category/:categoryName" element={<Results/>}/>
        </Routes>
    </Router>
  )
}

export default Routering;
