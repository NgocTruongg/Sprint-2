import {Product} from "./Product";
import React, {useEffect} from "react";


export function HomePage() {

    useEffect(() => {
        document.title = "Auto 365";
    }, []);

    return (
        <>
            <section id="product"><Product/></section>

        </>
    )
}