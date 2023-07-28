import {useParams} from "react-router";
import React, {useContext, useEffect, useState} from "react";
import {findProductById} from "../../service/product/productService"
import {addCart, findCartByCustomerId} from "../../service/cart/CartService";
import {ValueIconCartContext} from "../ValueIconCartContext";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import "../../css/detail.css"

export function ProductDetail() {
    const params = useParams();
    const token = localStorage.getItem("TOKEN");
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext);
    const username = localStorage.getItem("USERNAME");
    const [product, setProduct] = useState(null);


    useEffect(() => {
        (async () => {
            const result = await findProductById(params.id);
            setProduct(result);
        })()
    }, [params.id]);

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => { // cộng sản phẩm
        if (quantity < product.quantity) {
            setQuantity(quantity + 1);
        } else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };

    const handleDecrease = () => { // xóa
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (event) => { // thêm sản phẩm vào giỏ hàng nếu số lượng k đủ thì báo
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= product.quantity) {
            setQuantity(newQuantity);
        } else {
            Swal.fire({
                title: 'Thông báo',
                text: 'Sản phẩm trong kho không đủ!',
                icon: 'warning',
                confirmButtonText: 'OK'
            })
        }
    };

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCartByCustomerId(token);
                const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
                setIconQuantity(totalQuantity);
            })() : setIconQuantity(0)
        }
    }, []);

    const handleAddCart = async (id) => {
        const cart = {
            quantity: 1,
            status: true,
            product: ""
        }
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
    }

    if (!product) {
        return null;
    }
    return (
        <>
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner bg-light">
                                <div className="carousel-item active" id="image-news">
                                    <img className="w-100 h-100" src={product.image} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{product.productName}</h3>
                            <h3 className="font-weight-semi-bold mb-4">
                                    <span
                                        style={{color: "red"}}>{new Intl.NumberFormat().format(product.price)} VND</span>
                            </h3>
                            <p className="mb-4">
                                Độ phân giải: {product.screenResolution}
                            </p>
                            <p className="mb-4">
                                Kích thước màn hình: {product.screenSize}
                            </p>
                            <p className="mb-4">
                                Ram: {product.ram}
                            </p>
                            <p className="mb-4">
                                Bộ nhớ trong: {product.internalMemory}
                            </p>
                            <p className="mb-4">
                                số lượng trong kho: {product.quantity}
                            </p>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{width: 130}}>
                                    <div className="input-group-btn">
                                        <Link to="" className="a-cart" style={{fontSize: 40}}
                                              onClick={() => handleDecrease()}
                                        >-</Link>
                                        <input type="text" style={{fontSize: 40, width: 40, height: 40}}
                                               onChange={(event) => {
                                                   handleInputChange(event)
                                               }} value={quantity}/>
                                        <Link to="" className="a-cart" style={{fontSize: 40}}
                                              onClick={() => handleIncrease()}>+</Link>
                                    </div>
                                </div>
                                <div className="btn btn-primary px-3">
                                    {sessionStorage.getItem("TOKEN") && (
                                        <div className="row" style={{marginTop: 20}}>
                                            <div className="col">
                                                <button className="button-add"
                                                        onClick={() => handleAddCart(product?.productId)}>THÊM VÀO
                                                    GIỎ HÀNG
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {!sessionStorage.getItem("TOKEN") && (
                                        <div className="row" style={{marginTop: 20}}>
                                            <div className="col">
                                                <Link to="/login">
                                                    <button className="button-add">THÊM VÀO GIỎ HÀNG</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="bg-light p-30">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

                            <Tab eventKey="home" title="Mô tả">
                                <h4 className="mb-3">Mô tả sản phẩm</h4>
                                <p>
                                    {product.status}
                                </p>
                            </Tab>
                            <Tab eventKey="profile" title="Chi tiết">
                                <h4 className="mb-3">Chi tiết sản phẩm</h4>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Độ phân giải</th>
                                        <th>Kích thước màn</th>
                                        <th>Ram</th>
                                        <th>Bộ nhớ trong</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{product.screenResolution}</td>
                                        <td>{product.screenSize}</td>
                                        <td>{product.ram}</td>
                                        <td>{product.internalMemory}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}