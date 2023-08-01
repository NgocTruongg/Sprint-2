
import React, {useContext, useEffect, useState} from "react";
import {getAllProductByType} from "../../service/product/productService";
import {Link} from "react-router-dom";
import "../../css/product.css"
import {ValueIconCartContext} from "../ValueIconCartContext";


export function ProductDVD() {

    const [typeProducts, setTypeProducts] = useState(null);
    const [itemsToShow, setItemsToShow] = useState(8); // Số sản phẩm hiển thị ban đầu
    const [itemsPerLoad, setItemsPerLoad] = useState(4);

    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext);

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };



    useEffect(() => {
        document.title = "DVD / Android Box";
        (async () => {
            const result = await getAllProductByType(1);
            setTypeProducts(result);
        })()
    }, []);

    if (!typeProducts) {
        return null;
    }

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="title-product">Sản Phẩm Nâng cấp Màn Hình</span>
                </h2>
                <div className="row px-xl-5">
                    {typeProducts?.slice(0, itemsToShow)?.map((type, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <Link to={`/${type.productId}`} className="card-text ">
                                            <img className="img-fluid w-100" src={type.image} alt=""/>
                                        </Link>
                                        <div className="product-action">
                                            <Link to="/cart" className="btn btn-warning mr-2">
                                                <i className="bi bi-cart3"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div style={{textAlign: "center", textDecoration: "none"}}>
                                        <div>
                                            <Link to={`/detail/${type.productId}`} className="title-link">
                                                {type.productName.length > 15
                                                    ? type.productName.slice(0, 15) + "..."
                                                    : type.productName}
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <p className="card-price">
                                                <span
                                                    style={{color: "red"}}>{new Intl.NumberFormat().format(type.price)} VND</span>
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <p> Số lượng trong kho:
                                                {type.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {itemsToShow < typeProducts.length && (
                        <div className="text-center mt-3">
                            <button className="btn btn-warning" onClick={handleLoadMore}>
                                Xem Thêm
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}