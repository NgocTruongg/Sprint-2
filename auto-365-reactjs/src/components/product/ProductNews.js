import React, {useEffect, useState} from "react";
import {findNewsProduct} from "../../service/product/productService";
import {Link} from "react-router-dom";


export function ProductNews() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const productList = await findNewsProduct();
            setProducts(productList);
        })()
    }, []);

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="title-product">Sản Phẩm mới</span>
                </h2>
                <div className="row px-xl-5">
                    {products.map((product, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                            <div className="product-item bg-light mb-4">
                                <div className="product-img position-relative overflow-hidden">
                                    <Link to={`/${product.productId}`} className="card-text ">
                                        <img className="img-fluid w-100" src={product.image} alt=""/>
                                    </Link>
                                    <div className="product-action">
                                        <Link to="/cart" className="btn btn-outline-dark btn-square">
                                            <i className="bi bi-cart3"/>
                                        </Link>
                                    </div>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <div>
                                        <Link to={`/detail/${product.productId}`} className="title-link">
                                            {product.productName.length > 15
                                                ? product.productName.slice(0, 15) + "..."
                                                : product.productName}
                                        </Link>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <p className="card-price">
                                            <span style={{color: "red"}}>{new Intl.NumberFormat().format(product.price)} VND</span>
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <p> Số lượng trong kho:
                                            {product.quantity}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}