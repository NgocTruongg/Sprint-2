import React, {useContext, useEffect, useState} from "react";
import {findAll, getAllProductByType, getAllTypeProduct} from "../../service/product/productService";
import ReactPaginate from "react-paginate";
import "../../css/product.css"
import {Link} from "react-router-dom";
import {addCart} from "../../service/cart/CartService";
import Swal from "sweetalert2";
import {ValueIconCartContext} from "../ValueIconCartContext";


export function Product() {
    const token = sessionStorage.getItem("TOKEN");
    const username = sessionStorage.getItem("USERNAME");
    const [products, setProducts] = useState([]);
    const [productType, setProductType] = useState([]);

    const [itemsToShow, setItemsToShow] = useState(8); // Số sản phẩm hiển thị ban đầu
    const [itemsPerLoad, setItemsPerLoad] = useState(4);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext);
    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    const handleDisplayByType = async (type) => {
        const res = await getAllProductByType(type);
        setProducts(res);
    };

    const handleDisplayAll = async () => {
        const productList = await findAll();
        setProducts(productList);
    };


    useEffect(() => {
        (async () => {
            const productList = await findAll();
            setProducts(productList);
        })()
    }, []);

    useEffect(() => {
        const showProductType = async () => {
            const rs = await getAllTypeProduct();
            setProductType(rs)
        }
        showProductType()
    }, []);


    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        document.title = "Sản phẩm";
    }, []);


    const AddCart = async (id) => {
        const cart = {
            quantity: 1,
            status: true,
            product: ""
        }
        if (token) {
            try {
                await addCart({...cart, quantity: quantity, product: id}, token);
                setIconQuantity(iconQuantity + 1)
                Swal.fire({
                    title: 'Thông báo',
                    text: 'Thêm thành công sản phẩm vào giỏ hàng!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            } catch (err) {
                console.log(err)
            }
        } else {
            Swal.fire({
                text: 'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

        return (
            <>
                <section className="featured spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="section-title-all">
                                    <span>Sản Phẩm</span>
                                </h2>
                                <div className="featured__controls">
                                    <ul>
                                        <li onClick={() => handleDisplayAll()} className="active">
                                            Tất Cả
                                        </li>
                                        {productType?.slice(0, itemsToShow)?.map((value, index) => {
                                            return (
                                                <li onClick={() => handleDisplayByType(value.productTypeId)}>
                                                    {value.productTypeName}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="row px-xl-5">
                    {products?.slice(0, itemsToShow)?.map((product, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <Link to={`/detail/${product.productId}`}>
                                            <img className="img-fluid w-100" src={product.image} alt=""/>
                                        </Link>
                                        <div className="product-action">
                                            <Link className="btn btn-warning mr-2"
                                                  onClick={() => AddCart(product?.productId)}>
                                                Thêm Vào Giỏ Hàng
                                                <i className="bi bi-cart3"/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div style={{textAlign: "center", textDecoration: "none"}}>
                                        <div>
                                            <Link to={`/detail/${product.productId}`} className="title-link">
                                                {product.productName.length > 20
                                                    ? product.productName.slice(0, 20) + "..."
                                                    : product.productName}
                                            </Link>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <p className="card-price">
                                                    <span
                                                        style={{color: "red"}}>{new Intl.NumberFormat().format(product.price)} VND</span>
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <p> Số lượng trong kho:
                                                {product.quantity}
                                            </p>
                                        </div>
                                        {sessionStorage.getItem("ROLES") === "ADMIN" && (
                                            <div>
                                                <button className="btn btn-warning">
                                                    Sửa
                                                </button>
                                                <button className="btn btn-warning" style={{marginLeft: "20px"}}>
                                                    Xóa
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {itemsToShow < products.length && (
                        <div className="text-center mt-3">
                            <button className="btn btn-warning" onClick={handleLoadMore}>
                                Xem Thêm
                            </button>
                        </div>
                    )}
                </div>
            </>
        )
    }