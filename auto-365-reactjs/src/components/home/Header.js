import {Link, useNavigate} from "react-router-dom";
import "../../css/header.css"
import React from "react";


export function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("TOKEN");
        localStorage.removeItem("USERNAME");
        localStorage.removeItem("ROLES");
        navigate("/")
    };

    return (
        <>
            <div className="container-fluid"
                 style={{backgroundColor: "rgb(195 20 0 / 97%)", width: "100%", margin: "auto", height: "65px"}}>
                <div className="row align-items-center py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-2">
                        <Link to={"/"}>
                            <img src="https://auto365.vn/images/logo-bw.png" alt=""/>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <form style={{display:"flex"}}>
                            <div className="input-search">
                                <input type="text" className="form-control" placeholder="Bạn cần tìm ...?"/>
                            </div>
                            <button className="btn btn-warning">
                                <i className="bi bi-search "/>
                            </button>
                            <div className="col-lg-6 col-4">
                                <ul>
                                    <li>Lịch Sử Mua Hàng</li>
                                </ul>
                                <ul>
                                    <li>Dịch Vụ</li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-4" style={{textAlign: "end", fontWeight: "bold", color: "black"}}>
                        <p className="m-0">Hỗ trợ trực tuyến 24/7</p>
                        <p className="m-0">0378730129</p>
                    </div>
                </div>
            </div>
            <div className="row" id="header-auto"
                 style={{backgroundColor: "rgb(195 20 0 / 97%)", width: "100%", margin: "auto", height: "65px"}}>
                <div className="col-lg-9" style={{textAlign: "-webkit-center"}}>
                    <nav className="header__menu">
                        <ul>
                            <li className="active">
                                <Link to={"/product-light"}>Ánh Sáng</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>DVD / Android Box</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>Bán Tải</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>Âm Thanh</Link>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>Phim Cách Nhiệt</Link>
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
                                        <Link to={"/"}>Kèn Xe</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={"/product-dvd"}>Tra Cứu Bảo Hành</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <>
                            {!localStorage.getItem("TOKEN") && (
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
                            {localStorage.getItem("ROLES") === "ADMIN" && (
                                <nav className="header__menu">
                                    <ul>
                                        <li>
                                            <Link to="/">{localStorage.getItem("USERNAME")}</Link>
                                            <ul className="header__menu__dropdown">
                                                <li>
                                                    <Link to={"/employee"}>Quản Lý Nhân Viên</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/employee"}>Quản Lý Sản Phẩm</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => logout()}>Đăng Xuất</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            )}

                            {localStorage.getItem("ROLES") === "USER" && (
                                <nav className="header__menu">
                                    <ul>
                                        <li>
                                            <Link to="/" style={{color: "white", display: "flex"}}>
                                                <i className="bi bi-person-bounding-box"/>
                                                {localStorage.getItem("USERNAME")}
                                            </Link>
                                            <ul className="header__menu__dropdown">
                                                <li>
                                                    <Link to={"/user"}>Quản Lý Tài Khoản</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/user"}>lịch Sử Đặt Hàng</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={() => logout()}>Đăng Xuất</Link>
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
                                    <Link to={"/cart"} style={{marginTop: "-4px"}}>
                                        <i className="bi bi-cart3 "/> Giỏ Hàng
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