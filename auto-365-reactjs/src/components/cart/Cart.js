import React, {useContext, useEffect, useState} from "react";
import {ValueIconCartContext} from "../ValueIconCartContext";
import {deleteCart, findCartByCustomerId, payment, updateCart} from "../../service/cart/CartService";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {findCustomer} from "../../service/customer/CustomerService";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {useNavigate} from "react-router";


export function Cart() {
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);
    const token = sessionStorage.getItem("TOKEN");
    const username = sessionStorage.getItem("USERNAME");
    const [customer, setCustomer] = useState();
    const {setIconQuantity} = useContext(ValueIconCartContext)
    const [cart] = useState({
        quantity: 1,
        product: ""
    });

    const findAllCart = async () => {
        try {
            const result = await findCartByCustomerId(token);
            setCarts(result);
            const totalQuantity = result.reduce((total, item) => total + item.quantity, 0);
            setIconQuantity(totalQuantity);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    useEffect(() => {
        {
            username ? findAllCart() : setIconQuantity(0)
        }
    }, []);

    const totalPrice = carts.reduce((total, cart) => {
        return total + cart?.product?.price * cart?.quantity;
    }, 0);

    useEffect(() => {
        // Lưu giữ liệu vào sessionStorage mỗi khi cartItems thay đổi
        sessionStorage.setItem('store', JSON.stringify(carts));
    }, [carts]);

    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem('store'));
        if (storedItems) {
            setCarts(storedItems);
        }
    },[])


    const decreaseQuantity = async (cartIndex) => { // giảm số lượng
        const updatedCarts = [...carts];
        if (updatedCarts[cartIndex].quantity > 1) {
            updatedCarts[cartIndex].quantity -= 1;
            setCarts(updatedCarts);
            try {
                await updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    product: updatedCarts[cartIndex].product?.productId
                }, token);
                findAllCart();
            } catch (e) {
                console.log(e);
            }
        }
    };

    const increaseQuantity = async (cartIndex) => { // tăng số lượng
        const updatedCarts = [...carts];
        updatedCarts[cartIndex].quantity += 1;
        setCarts(updatedCarts);
        await updateCart({
            ...cart,
            quantity: updatedCarts[cartIndex].quantity,
            product: updatedCarts[cartIndex].product?.productId
        }, token);
        findAllCart();
    };

    const handleInputChange = async (event, cartIndex) => {
        const newQuantity = parseInt(event.target.value);
        try {
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                const updatedCarts = [...carts];
                updatedCarts[cartIndex].quantity = newQuantity;
                setCarts(updatedCarts);
                await updateCart({
                    ...cart,
                    quantity: updatedCarts[cartIndex].quantity,
                    product: updatedCarts[cartIndex].product?.productId
                }, token);
                findAllCart();
            }
        } catch (e) {
            console.log(e);
        }
    };

    const removeCart = async (id) => {
        try {
            await deleteCart(id, token);
            Swal.fire({
                title: 'Thông báo',
                text: 'Xoá sản phẩm thành công!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            findAllCart();
        } catch (e) {
            console.log(e);
        }
    }

    //Thanh toán bằng payment

    const handlePayment = async (totalPrice) => {
        try {
            await payment({totalPrice}, token);
            navigate(`/order-detail/${totalPrice}`)
        } catch (e) {
            console.log(e);
        }
    }

    // const handleOnclickPayment = async (totalPrice) => {
    //     const payment = {
    //         totalPrice: totalPrice
    //     }
    //     try {
    //         const result = await payments(payment, token);
    //         sessionStorage.setItem("totalPrice" , totalPrice)
    //         window.location.href = result.url;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return (
        <>
            <div className="container-fluid" style={{marginTop: "60px"}}>
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <Link className="breadcrumb-item text-dark" to={"/"}>
                                Home
                            </Link>
                            <span className="breadcrumb-item active">Giỏ Hàng</span>
                        </nav>
                    </div>
                    <div className="col-lg-8 table-responsive mb-4" style={{boxShadow: "0px 0px 14px black"}}>
                        {carts.length === 0 ? (
                            <div className="row border-top border-bottom">
                                <div className="row main">
                                    <img
                                        src="https://drive.gianhangvn.com/image/empty-cart.jpg"
                                        alt="Giỏ hàng trống"/>
                                </div>
                            </div>
                        ) : (
                            <table className="table table-striped">
                                <thead className="table-secondary text-center">
                                <tr>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Xóa</th>
                                </tr>
                                </thead>
                                <tbody className="align-middle">
                                {carts.map((cart, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={cart?.product?.image} style={{width: "70px"}}/>
                                            <span className="text-center">{cart?.product?.productName}</span>

                                        </td>
                                        <td className="text-center">
                                            {new Intl.NumberFormat().format(cart?.product?.price)} VND
                                        </td>
                                        <td className="text-center">
                                            <Link onClick={() => decreaseQuantity(index)} style={{padding: "inherit"}}>
                                                <i className="bi bi-dash-square"/>
                                            </Link>
                                            <input type="text" style={{width: "30px", textAlign: "center"}}
                                                   onChange={(event) => handleInputChange(event, index)}
                                                   value={cart.quantity}/>
                                            <Link onClick={() => increaseQuantity(index)} style={{padding: "inherit"}}>
                                                <i className="bi bi-plus-square"/>
                                            </Link>
                                        </td>

                                        <td className="text-center">
                                            <Link onClick={() => removeCart(cart?.idCart)}>
                                                <i className="bi bi-x-square"/>
                                            </Link>
                                        </td>

                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    {carts.length === 0 ? (
                        <div className="col-lg-3"
                             style={{height: "50%", marginLeft: "auto"}}>
                            <h5 style={{textAlign: "center"}} className="mt-3">
                                Giỏ hàng bạn chưa có gì
                            </h5>
                            <button className="btn btn-secondary mt-3" style={{width: "100%"}}>
                                <Link to="/" style={{textDecoration: "none", color: "white"}}>
                                    <i className="bi bi-caret-left-square"/> Mua thêm sản phẩm
                                </Link>
                            </button>
                        </div>

                    ) : (
                        <div className="col-lg-3"
                             style={{height: "50%", boxShadow: "0px 0px 14px black", marginLeft: "auto"}}>
                            <h5 style={{textAlign: "center", marginBottom:"15px"}} className="mt-3">
                                Giỏ Hàng
                            </h5>
                            <div className="p-30 mb-5">
                                <div className="border-bottom pb-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h6>Thành tiền:</h6>
                                        <h6>
                                            {new Intl.NumberFormat().format(totalPrice)} VND
                                        </h6>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h6 className="font-weight-medium">Tiền ship:</h6>
                                        <h6>0 VND</h6>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3 ">
                                        <h6 className="font-weight-medium">Giảm giá:</h6>
                                        <h6>0 VND</h6>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5>Tổng số tiền: </h5>
                                        <h5>
                                            {new Intl.NumberFormat().format(totalPrice)} VND
                                        </h5>
                                    </div>
                                    <PayPalScriptProvider
                                        options={{"client-id": 'AbEGfDFZsTMuitYfPAWUU_vsWHszMmW0XyEvuvMbKay_0sr81ieansnttsqN0FMUBnaJ5ar3IMRUDv7A'}}
                                    >
                                        <PayPalButtons
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                value: parseFloat((totalPrice / 24000).toString().slice(0, 4)),
                                                                currency_code: 'USD'
                                                            },
                                                        },
                                                    ],
                                                });
                                            }}
                                            onApprove={(data, actions) => {
                                                handlePayment(totalPrice)
                                            }}
                                        />
                                    </PayPalScriptProvider>

                                    {/*<button className="btn btn-warning mt-3" style={{width: "100%"}} onClick={() => handleOnclickPayment(totalPrice)}>*/}
                                    {/*    Thanh toán <i className="bi bi-wallet2"/>*/}
                                    {/*</button>*/}
                                    <button className="btn btn-secondary mt-3" style={{width: "100%"}}>
                                        <Link to="/" style={{textDecoration: "none", color: "white"}}>
                                            <i className="bi bi-caret-left-square"/> Mua thêm sản phẩm
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}