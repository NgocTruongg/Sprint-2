import {Product} from "../product/Product";
import React, {useEffect} from "react";
import {ProductNews} from "../product/ProductNews";


export function HomePage() {

    useEffect(() => {
        document.title = "Auto 365";
    }, []);

    return (
        <>
            <section id="productNews"><ProductNews/></section>
            <section id="product"><Product/></section>
        </>
    )
}