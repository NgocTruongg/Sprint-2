import React, {useContext, useEffect, useState} from "react";
import {findNewsProduct} from "../../service/product/productService";
import {Link} from "react-router-dom";
import {addCart} from "../../service/cart/CartService";
import Swal from "sweetalert2";
import {ValueIconCartContext} from "../ValueIconCartContext";


export function ProductNews() {
    const token = sessionStorage.getItem("TOKEN");
    const username = sessionStorage.getItem("USERNAME");
    const [quantity, setQuantity] = useState(1);
    const [products, setProducts] = useState([]);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext);

    useEffect(() => {
        (async () => {
            const productList = await findNewsProduct();
            setProducts(productList);
        })()
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
            <div className="container-fluid pt-5 pb-3">
                <div>
                    {sessionStorage.getItem("ROLES") === "ADMIN" && (
                        <button className="btn btn-outline-dark">
                            Thêm mới sản phẩm
                        </button>

                    )}
                </div>
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="title-product">Sản Phẩm Mới</span>
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
                                            <Link className="btn btn-warning mr-2"
                                                  onClick={() => AddCart(product?.productId)}>
                                                Thêm Vào Giỏ Hàng
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
                                            <button className="btn btn-secondary">
                                                Sửa
                                            </button>
                                            <button className="btn btn-dark" style={{marginLeft: "20px"}}>
                                                Xóa
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}