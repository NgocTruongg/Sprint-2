import {Link, useNavigate} from "react-router-dom";
import "../../css/header.css"
import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";


export function Header() {
    const carts = sessionStorage.getItem('store');
    const parsedValue = JSON.parse(carts);
    const navigate = useNavigate();


    const logout = () => {
        sessionStorage.clear();
        Swal.fire({
            title: 'Thông báo',
            text: 'Đăng xuất thành công!',
            icon: 'success',
            confirmButtonText: 'OK'
        })
        navigate("/")
    };

    return (
        <>
            <div className="container-fluid"
                 style={{backgroundColor: "rgb(195 20 0 / 97%)", width: "100%", height: "65px"}}>
                <div className="row align-items-center py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-2" style={{marginBottom: "12px"}}>
                        <Link to={"/"}>
                            <img src="https://auto365.vn/images/logo-bw.png" alt=""/>
                        </Link>
                    </div>
                    <div className="col-lg-6" style={{display: "flex", marginBottom: "12px"}}>
                        <div className="input-search" style={{position: "relative", width: "40%"}}>
                            <input type="text" className="form-control"
                                   placeholder="Bạn cần tìm ...?"/>
                            <i className="bi bi-search" style={{
                                position: "absolute",
                                top: "50%",
                                right: "8px",
                                transform: "translateY(-50%)",
                                zIndex: "1"
                            }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-4" style={{textAlign: "end", fontWeight: "bold", color: "white"}}>
                        <p className="m-0">Hỗ trợ trực tuyến 24/7</p>
                        <p className="m-0">0378730129</p>
                    </div>
                </div>
            </div>
            <div className="row" id="header-auto"
                 style={{backgroundColor: "#DBDBDB", width: "100%", margin: "auto", height: "65px"}}>
                <div className="col-lg-9" style={{textAlign: "-webkit-center"}}>
                    <nav className="header__menu">
                        <ul>
                            <li className="active">
                                <Link to={"/"}>Trang Chủ</Link>
                            </li>
                            <li>
                                <a href={"#product"}>Sản Phẩm</a>
                            </li>
                            <li>
                                <Link to="/">Đồ Chơi Xe Hơi <i className="bi bi-caret-down-square-fill"/></Link>
                                <ul className="header__menu__dropdown">
                                    <li>
                                        <Link to={"/product-camera"}>Sản Phẩm Chăm Sóc</Link>
                                    </li>
                                    <li>
                                        <Link to={"/product-sensor"}>Cảm Biến Áp Suất</Link>
                                    </li>
                                    <li>
                                        <Link to={"/product-sensor"}>Cảm Biến Đỗ Xe</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>Màn Hình HUD</Link>
                                    </li>
                                    <li>
                                        <Link to={"/product-camera"}>Camera Hành Trình</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to={"/"}>Tra Cứu Bảo Hành</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>Liên Hệ</Link>
                            </li>
                            <li>
                                {sessionStorage.getItem("ROLES") === "USER" && (
                                    <Link to={"/cart"}>Giỏ Hàng</Link>
                                )}
                            </li>
                            <li>
                                {sessionStorage.getItem("ROLES") === "USER" && (
                                    <Link to={"/user/history"}>Lịch Sử Đặt Hàng</Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <>
                            {!sessionStorage.getItem("TOKEN") && (
                                <nav className="header__menu">
                                    <ul>
                                        <li className="active">
                                            <Link to={"/login"}>
                                                Đăng Nhập
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            )}
                            {sessionStorage.getItem("ROLES") === "ADMIN" && (
                                <nav className="header__menu">
                                    <ul>
                                        <li>
                                            <Link to="/" style={{color: "#013AFF", display: "flex"}}>
                                                <i className="bi bi-person-bounding-box"/>
                                                {sessionStorage.getItem("USERNAME")}
                                                <i className="bi bi-caret-down-square-fill"/>
                                            </Link>
                                            <ul className="header__menu__dropdown">
                                                <li>
                                                    <Link to={"/employee"}>Quản Lý Nhân Viên</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/product"}>Quản Lý Sản Phẩm</Link>
                                                </li>
                                                <li>
                                                    <a href="" onClick={() => logout()}>Đăng Xuất</a>
                                                </li>
                                                <li>
                                                    <Link to={"/user/information"}>Quản Lý Tài Khoản</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            )}

                            {sessionStorage.getItem("ROLES") === "USER" && (
                                <nav className="header__menu">
                                    <ul>
                                        <li>
                                            <Link to="/" style={{color: "#013AFF", display: "flex"}}>
                                                <i className="bi bi-person-bounding-box"/>
                                                {sessionStorage.getItem("USERNAME")}
                                                <i className="bi bi-caret-down-square-fill"/>
                                            </Link>
                                            <ul className="header__menu__dropdown">
                                                <li>
                                                    <Link to={"/user/information"}>Quản Lý Tài Khoản</Link>
                                                </li>
                                                <li>
                                                    <a href="" onClick={() => logout()}>Đăng Xuất</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            )}
                        </>
                        <nav className="header__menu">
                            <ul>
                                <li className="active">
                                    {sessionStorage.getItem("ROLES") === "USER" && (
                                        <Link to={"/cart"} style={{marginTop: "-4px"}}>
                                            <i className="bi bi-cart3 "/> {parsedValue?.length}
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}