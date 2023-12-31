import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {findCustomer} from "../service/customer/CustomerService";
import moment from "moment";

export function PaymentSuccess() {

    const token = sessionStorage.getItem("TOKEN");
    const username = sessionStorage.getItem("USERNAME");
    const [customer, setCustomer] = useState();
    const currentDate = new Date();
    const param = useParams();

    useEffect(() => {
        {
            username ? (async () => {
                const result = await findCustomer(token);
                setCustomer(result);
            })() : setCustomer(null)
        }
    }, []);
    return (
        <>
            <div className="container-fluid" style={{textAlign: "center"}}>
                <h1 style={{color: "red"}}>Thanh toán thành công</h1>
                <div style={{marginTop:"20px"}}>
                    <table className="table table-striped " style={{width: 500,textAlign:"center", margin:"auto"}}>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Tên khách hàng</th>
                            <td>{customer?.customerName}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{customer?.address}</td>
                        </tr>
                        <tr>
                            <th>Ngày đặt hàng</th>
                            <td>{moment(currentDate).format('DD-MM-YYYY')}</td>
                        </tr>
                        <tr>
                            <th>Tổng tiền</th>
                            <td>
                                {new Intl.NumberFormat().format(+param.totalPrice)} VND
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}