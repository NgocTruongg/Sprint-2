export function Cart() {

    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody className="align-middle">
                            <tr>
                                <td className="align-middle">
                                    <img src="../image/màn%20dvd.jpg" alt="" style={{ width: 50 }} />{" "}
                                    ANDROID BOX ZESTECH DX300
                                </td>
                                <td className="align-middle">9.520.000 VND</td>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash"/>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg"/>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">9.520.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <img src="../image/dvd.jpg" alt="" style={{ width: 50 }} />
                                    ANDROID BOX ZESTECH DX265 PRO{" "}
                                </td>
                                <td className="align-middle">7.500.000 VND</td>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash"/>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg"/>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">7.500.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-middle">
                                    <img src="../image/cam.png" alt="" style={{ width: 50 }} />
                                    CAMERA HÀNH TRÌNH HÀN QUỐC BLACKVUE DR590X-2CH
                                </td>
                                <td className="align-middle">6.9000.000 VND</td>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-minus">
                                                <i className="bi bi-dash"/>
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            defaultValue={1}
                                        />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-primary btn-plus">
                                                <i className="bi bi-plus-lg"/>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">6.9000.000 VND</td>
                                <td className="align-middle">
                                    <button className="btn btn-sm btn-danger">
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Cart Summary</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>$150</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>$160</h5>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}