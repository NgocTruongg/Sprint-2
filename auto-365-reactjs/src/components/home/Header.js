import {Link, useNavigate} from "react-router-dom";
import "../../css/header.css"
import React from "react";


export function Header() {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("TOKEN");
        sessionStorage.removeItem("USERNAME");
        sessionStorage.removeItem("ROLES");
        navigate("/")
    };

    return (
        <>
            <div className="row" id="header-auto"
                 style={{backgroundColor: "rgb(195 20 0 / 97%)", width: "100%", margin: "auto", height:"65px"}}>
                <div className="col-lg-2 header__logo">
                    <Link to={"/"}>
                        <img src="https://auto365.vn/images/logo-bw.png" alt=""/>
                    </Link>
                </div>
                <div className="col-lg-7" style={{textAlign: "-webkit-center"}}>
                    <nav className="header__menu">
                        <ul>
                            <li className="active">
                                <Link to={"/product-light"}>Ánh Sáng</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>DVD / Android Box</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>Âm Thanh</Link>
                            </li>
                            <li>
                                <Link to="/">Đồ chơi xe hơi <i className="bi bi-caret-down-square-fill"/></Link>
                                <ul className="header__menu__dropdown">
                                    <li>
                                        <Link to={"/product-camera"}>Cam Hành Trình</Link>
                                    </li>
                                    <li>
                                        <Link to={"/product-sensor"}>Cảm Biến Áp Suất</Link>
                                    </li>
                                    <li>
                                        <Link to={"/product-sensor"}>Cảm Biến Đỗ Xe</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>Kèn Xe</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>Phim Cách Nhiệt</Link>
                                    </li>
                                </ul>
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
                                                Đăng nhập
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            )}
                            {sessionStorage.getItem("ROLES") === "ADMIN" && (
                                <nav className="header__menu">
                                    <ul>
                                        <li>
                                            <Link to="/">{sessionStorage.getItem("USERNAME")}</Link>
                                            <ul className="header__menu__dropdown">
                                                <li>
                                                    <Link to={"/employee"}>Quản lý nhân viên</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/employee"}>Quản lý sản phẩm</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => logout()}>Đăng xuất</Link>
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
                                            <Link to="/">{sessionStorage.getItem("USERNAME")}</Link>
                                            <ul className="header__menu__dropdown">
                                                <li>
                                                    <Link to={"/user"}>Quản lý tài khoản</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/user"}>lịch sử đặt hàng</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => logout()}>Đăng xuất</Link>
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
                                    <Link to={"/cart"} style={{marginTop:"-4px"}}>
                                        <i className="bi bi-cart3 " /> Giỏ hàng
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}