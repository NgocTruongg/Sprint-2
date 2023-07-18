import './App.css';
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Product} from "./components/Product";
import {ProductDetail} from "./components/ProductDetail";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {HomePage} from "./components/HomePage";
import {Cart} from "./components/Cart";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/detail/:id" element={<ProductDetail/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>

            </Routes>
            <Footer/>


        </>
    );
}

export default App;
