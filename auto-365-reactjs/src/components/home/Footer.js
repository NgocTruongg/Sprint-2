import "../../css/footer.css"
import {Link} from "react-router-dom";
import React from "react";


export function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
                <div className="row px-xl-4">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <h5 className="text-secondary text-uppercase mb-4">Liên hệ Auto 365</h5>
                        <p className="mb-0">
                            Địa chỉ: 15/14 Bắc Đẩu, Q Hải Châu, TP Đà Nẵng
                        </p>
                        <p className="mb-0">
                            Hotline: 0.378.730.129
                        </p>
                        <p className="mb-0">
                            Email: auto365@gmail.vn
                        </p>
                        <p className="mb-0">
                            Website: www.auto365.vn
                        </p>
                        <p className="mb-0">
                            Thời gian làm việc: Từ thứ 2 - thứ 7 (8h30 - 18h30)
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="text-uppercase mb-4">Về chúng tôi</h5>
                                <div className="d-flex flex-column justify-content-start product-footer">
                                    <a className="text-secondary mb-2" href="#">
                                        Chính sách đổi trả
                                    </a>
                                    <a className="text-secondary mb-2" href="#">
                                        Liên hệ - góp ý
                                    </a>
                                    <a className="text-secondary mb-2" href="#">
                                        Quy định đăng bình luận
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">Sản phẩm</h5>
                                <div className="d-flex flex-column justify-content-start product-footer">
                                    <a className="text-secondary mb-2" href="#">
                                        Nâng cấp ánh sáng
                                    </a>
                                    <a className="text-secondary mb-2" href="#">
                                        DVD/Android Box
                                    </a>
                                    <a className="text-secondary mb-2" href="#">
                                        Bán tải
                                    </a>
                                    <a className="text-secondary mb-2" href="#">
                                        Phim cách nhiệt
                                    </a>
                                    <a className="text-secondary mb-2" href="#">
                                        Cam hành trình
                                    </a>
                                    <a className="text-secondary" href="#">
                                        Âm thanh
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">Thương hiệu</h5>
                                <div className="f-brand-logo-list">
                                    <a>
                                        <img src="https://auto365.vn/uploads/images/product/brands/logo-gtr-220x48.png"
                                             alt=""/>
                                    </a>

                                </div>
                                <h6 className="text-secondary text-uppercase mt-4 mb-3">Thông tin thêm</h6>
                                <div className="d-flex logo-information">
                                    <a className="btn btn-warning mr-2" href="https://www.tiktok.com/@auto365.vn"
                                       target="_blank">
                                        <i className="bi bi-tiktok"/>
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-warning mr-2" href="https://www.youtube.com/@ChannelAuto365"
                                       target="_blank">
                                        <i className="bi bi-youtube"/>
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-warning mr-2" href="https://www.facebook.com/Auto365.vn"
                                       target="_blank">
                                        <i className="bi bi-facebook"/>
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-warning" href="https://www.youtube.com/@ChannelAuto365"
                                       target="_blank">
                                        <i className="bi bi-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="row border-top mx-xl-5 py-4"
                    style={{borderColor: "rgba(256, 256, 256, .1) !important"}}
                >
                    <div className="col-md-12 px-xl-0">
                        <p style={{textAlign: "center"}}>
                            Auto 365 ©{" "} 2021 Thương hiệu độ xe hàng đầu tại Việt Nam. All Rights Reserved
                        </p>
                    </div>

                </div>
            </div>

        </>
    )

}