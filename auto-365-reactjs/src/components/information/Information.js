import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {findCustomer} from "../../service/customer/CustomerService";
import "../../css/information.css"
import moment from 'moment';

export function Information() {
    const username = sessionStorage.getItem("USERNAME")
    const token = sessionStorage.getItem("TOKEN")
    const [customer, setCustomer] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/");
    }
    return (
        <>
            <div className="container" id="info">
                <div className="row" style={{display: "flex", marginTop: 60}}>
                    <div className="col-4 category-info">
                        <h2>
                            Danh mục
                        </h2>
                        <li>
                            <Link to="/user/history">
                                <i className="bi bi-caret-right"/>
                                Lịch sử mua hàng
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/information">
                                <i className="bi bi-caret-right"/>
                                Thông tin cá nhân
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="bi bi-caret-right"/>
                                Tra cứu hạn bảo hành
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/information">
                                <i className="bi bi-caret-right"/>
                                Thay đổi mật khẩu
                            </Link>
                        </li>
                    </div>
                    <div className="col-6 information" style={{marginLeft:"3%"}}>
                        <div style={{marginLeft:"20%"}}>
                            <h1>
                                <span>Thông tin cá nhân</span>
                            </h1>
                            <div>
                                <div>
                                    <strong>Giới tính:</strong> {customer?.gender}
                                </div>
                                <div>
                                    <strong>Tên khách hàng:</strong> {customer?.customerName}
                                </div>
                                <div>
                                    <strong>Số điện thoại:</strong> {customer?.numberPhone}
                                </div>
                                <div>
                                    <strong>Email:</strong> {customer?.email}
                                </div>
                                <div>
                                    <strong>Ngày sinh:</strong>{moment(customer?.dayOfBirth).format('DD-MM-YYYY')}
                                </div>
                                <h3>Địa chỉ nhận hàng</h3>
                                <div>
                                    {customer?.address}
                                </div>

                                <button className="btn btn-warning">
                                    Thêm địa chỉ nhận hàng
                                </button>
                                <button className="btn btn-danger" style={{marginLeft:20}}>
                                    Cập nhật
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}