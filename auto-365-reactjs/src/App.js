import './App.css';
import React from "react";
import {ProductDetail} from "./components/product/ProductDetail";
import {Footer} from "./components/home/Footer";
import {Header} from "./components/home/Header";
import {HomePage} from "./components/home/HomePage";
import {Cart} from "./components/cart/Cart";
import {Route, Routes} from "react-router-dom";
import {Login} from "./components/login/Login";
import {ProductLight} from "./components/product/ProductLight";
import {ProductDVD} from "./components/product/ProductDVD";
import {ProductCamera} from "./components/product/ProductCamera";
import {ProductSensor} from "./components/product/ProductSensor";
import {QuantityProvider} from "./components/ValueIconCartContext";
import {HistoryCart} from "./components/history/HistoryCart";
import {Information} from "./components/information/Information";
import {PaymentSuccess} from "./components/PaymentSuccess";

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
                    <Route path={"/user/history"} element={<HistoryCart/>}/>
                    <Route path={"/user/information"} element={<Information/>}/>
                    <Route path={"/order-detail/:totalPrice"} element={<PaymentSuccess/>}/>
                </Routes>
                <Footer/>
            </QuantityProvider>
        </>
    );
}

export default App;
