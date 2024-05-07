import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductsLists2 from './components/ProductsLists2';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import {store} from './rtk/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
        <Slider/>
      <ProductsLists2/>
        </>
      }/>
      <Route path='about' element={<About/>}/>
      <Route path='product/:productId' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

