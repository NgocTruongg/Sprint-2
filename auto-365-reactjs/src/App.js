import './App.css';
import React from "react";
import {ProductDetail} from "./components/product/ProductDetail";
import {Footer} from "./components/home/Footer";
import {Header} from "./components/home/Header";
import {HomePage} from "./components/home/HomePage";
import {Cart} from "./components/Cart";
import {Route, Routes} from "react-router-dom";
import {Login} from "./components/login/Login";
import {ProductLight} from "./components/product/ProductLight";
import {ProductDVD} from "./components/product/ProductDVD";
import {ProductCamera} from "./components/product/ProductCamera";
import {ProductSensor} from "./components/product/ProductSensor";
import {QuantityProvider} from "./components/ValueIconCartContext";

function App() {
    return (
        <>
            <QuantityProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/detail/:id" element={<ProductDetail/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/product-light" element={<ProductLight/>}></Route>
                    <Route path="/product-dvd" element={<ProductDVD/>}></Route>
                    <Route path="/product-camera" element={<ProductCamera/>}></Route>
                    <Route path="/product-sensor" element={<ProductSensor/>}></Route>
                </Routes>
                <Footer/>
            </QuantityProvider>
        </>
    );
}

export default App;
