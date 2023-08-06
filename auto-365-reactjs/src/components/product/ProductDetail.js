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
    const token = sessionStorage.getItem("TOKEN");
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext);
    const username = sessionStorage.getItem("USERNAME");
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
        }
    ;
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
            if (quantity == 0) {
                Swal.fire({
                    title: 'Thông báo',
                    text: 'Sản phẩm phải lớn hơn hoặc bằng 1!',
                    icon: 'error',
                })
            } else {
                Swal.fire({
                    title: 'Thông báo',
                    text: 'Thêm thành công sản phẩm vào giỏ hàng!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    if (!product) {
        return null;
    }
    return (
        <>
            <div className="container-fluid pb-5 mt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel">
                            <div>
                                <div className="carousel-item active" id="image-news"
                                     style={{height: "50%", boxShadow: "0px 0px 14px black"}}>
                                    <img className="w-100 h-100" src={product.image} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7" style={{boxShadow: "0px 0px 14px black"}}>
                        <div className="h-100 p-30">
                            <h3 className="mt-5">{product.productName}</h3>
                            <h3 className="font-weight-semi-bold mb-4">
                                <span style={{color: "red"}}>
                                    {new Intl.NumberFormat().format(product.price)} VND
                                </span>
                            </h3>
                            <table className=" table table-secondary">
                                <thead>
                                <tr>
                                    <td>Độ phân giải</td>
                                    <td>
                                        {product.screenResolution !== null ? product.screenResolution : '-'}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kích thước màn</td>
                                    <td>{product.screenSize !== null ? product.screenSize : '-'}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{product.ram !== null ? product.ram : '-'}</td>
                                </tr>
                                <tr>
                                    <td>Bộ nhớ trong</td>
                                    <td>{product.internalMemory !== null ? product.internalMemory : '-'}</td>
                                </tr>
                                </thead>
                            </table>
                            <div className="d-flex mb-4 pt-2">
                                <div className="d-flex" style={{marginTop: "21px"}}>
                                    <p onClick={() => handleDecrease()}>
                                        <i className="bi bi-dash-square fs-2"/>
                                    </p>
                                    <input type="text" style={{
                                        width: "44px",
                                        height: "32px",
                                        marginTop: "9px",
                                        textAlign: "center"
                                    }}
                                           onChange={(event) => handleInputChange(event)}
                                           value={quantity}/>
                                    <p onClick={() => handleIncrease()} style={{padding: "inherit"}}>
                                        <i className="bi bi-plus-square fs-2"/>
                                    </p>
                                </div>
                                <div className="px-3 mb-4 pt-2">
                                    {sessionStorage.getItem("TOKEN") && (
                                        <div className="row" style={{marginTop: 20}}>
                                            <div>
                                                <div className="btn btn-warning"
                                                     onClick={() => handleAddCart(product?.productId)}>
                                                    THÊM VÀO GIỎ HÀNG
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {!sessionStorage.getItem("TOKEN") && (
                                        <div className="row" style={{marginTop: 20}}>
                                            <div>
                                                <Link to="/login">
                                                    <div className="btn btn-warning">
                                                        THÊM VÀO GIỎ HÀNG
                                                    </div>
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

                            <Tab eventKey="home" title="Chi Tiết">
                                <h4 className="mb-3">Chi tiết sản phẩm</h4>
                                <table className="table table-striped" style={{textAlign:"center"}}>
                                    <thead>
                                    <tr>
                                        <th>Độ phân giải</th>
                                        <th>Kích thước màn</th>
                                        <th>Ram</th>
                                        <th>Bộ nhớ trong</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr >
                                        <td>{product.screenResolution !== null ? product.screenResolution : '-'}</td>
                                        <td>{product.screenSize !== null ? product.screenSize : '-'}</td>
                                        <td>{product.ram !== null ? product.ram : '-'}</td>
                                        <td>{product.internalMemory !== null ? product.internalMemory : '-'}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </Tab>
                            <Tab eventKey="profile" title="Mô Tả">
                                <h4 className="mb-3">Chi Tiết</h4>
                                <p>
                                    {product.status}
                                </p>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}