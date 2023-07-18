import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {findProductById} from "../service/product/productService";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function ProductDetail() {

    const param = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await findProductById(param.id);
            setProduct(result);
        })()
    }, [param.id]);

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
                                <div className="carousel-item active">
                                    <img className="w-100 h-100" src={product.image} alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{product.productName}</h3>
                            <h3 className="font-weight-semi-bold mb-4">{product.price}</h3>
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
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus"/>
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-secondary border-0 text-center"
                                        defaultValue={1}
                                    />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus"/>
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-primary px-3">
                                    <i className="fa fa-shopping-cart mr-1"/> Thêm vào giỏ hàng
                                </button>
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
                                <table>
                                    <ul>
                                        <li>Độ phân giải: {product.screenResolution}</li>
                                    </ul>

                                    <ul>
                                        <li>Kích thước màn: {product.screenSize}</li>
                                    </ul>
                                    <ul>
                                        <li>Ram : {product.ram}</li>
                                    </ul>
                                    <ul>
                                        <li>Bộ nhớ trong: {product.internalMemory}</li>
                                    </ul>
                                </table>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}