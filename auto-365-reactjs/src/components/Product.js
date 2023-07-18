import React, {useEffect, useState} from "react";
import {findAll, findAllProductType, findByName} from "../service/product/productService";
import ReactPaginate from "react-paginate";
import "../css/content.css"
import {Link} from "react-router-dom";


export function Product() {
    const [products, setProducts] = useState([]);
    const [typeProducts, setTypeProducts] = useState([]);
    const [request, setRequest] = useState({
        page: 0,
        name: "",
    })
    const [pageCount, setPageCount] = useState(0);



    const handlePageOnclick = (event) => {
        setRequest((prev) => ({...prev, page: event.selected}))
    }

    const handleNameOnchange = (event) => {
        setRequest((prev) => ({...prev, productName: event.target.value}))
    };

    const handleTypeProductOnchange = (event) => {
        setRequest((prev) => ({...prev, productTypeId: +event.target.value}))
    };

    useEffect(() => {
        (async () => {
            const productList = await findByName(request);
            setPageCount(productList.totalPages);
            setProducts(productList.content);
        })()
    }, [request]);

    useEffect(() => {
        (async () => {
            const typeProductList = await findAllProductType();
            setTypeProducts(typeProductList);
        })()
    }, [])


    useEffect(() => {
        document.title = "Sản phẩm";
    }, []);


    return (
        <>
            {/*<div className="row">*/}
            {/*    <div className="col-7"></div>*/}
            {/*    <div className="col-5 search-flex container-fluid">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-6">*/}
            {/*                <input onChange={handleNameOnchange} className="form-control input-search"*/}
            {/*                       placeholder="Tìm kiếm theo tên......"*/}
            {/*                       type="text"/>*/}
            {/*            </div>*/}
            {/*<div className="col-6">*/}
            {/*    <select onChange={handleTypeProductOnchange} className="form-control select-option">*/}
            {/*        <option className="text-option" value="0">-- Loại sản phẩm --</option>*/}
            {/*        {typeProducts && typeProducts.map((typeProduct) => (*/}
            {/*            <option className="text-option" key={typeProduct.productTypeId}*/}
            {/*                    value={typeProduct.productTypeId}>{typeProduct.productTypeName}</option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="bg-secondary pr-3">Featured Products</span>
                </h2>
                <div className="row px-xl-5">
                    {products.length === 0 ? (
                        <div
                            className="message-search">
                            <div>Không tìm thấy tên sản phẩm</div>
                            <div className="text-center" style={{fontSize: 100}}><i
                                className="fas fa-search icon-search"/></div>
                        </div>

                    ) : products.map((product, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden">
                                            <Link to={`/detail/${product.productId}`} className="card-text ">
                                                <img className="img-fluid w-100" src={product.image} alt=""/>
                                            </Link>
                                            <div className="product-action">
                                                <Link to="/cart" className="btn btn-outline-dark btn-square">
                                                    <i className="bi bi-cart3"/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div style={{textAlign: "center"}}>
                                            <div>
                                                <Link to={`/detail/${product.productId}`} className="card-text ">
                                                    {product.productName.length > 15
                                                        ? product.productName.slice(0, 15) + "..."
                                                        : product.productName}
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <p className="card-price">
                                                    {product.price.toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })} VND
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <p> Số lượng trong kho:
                                                    {product.quantity}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            {products.length === 0 ? (
                <div></div>
            ) : (
                <div>
                    {products && (
                        <div className="d-grid" style={{marginLeft: "46%", marginTop: 10}}>
                            <ReactPaginate
                                previousLabel="Trước"
                                nextLabel="Sau"
                                pageCount={pageCount}
                                onPageChange={handlePageOnclick}
                                containerClassName='pagination'
                                previousClassName='page-item'
                                previousLinkClassName='page-link'
                                nextClassName='page-item'
                                nextLinkClassName='page-link'
                                pageClassName='page-item'
                                pageLinkClassName='page-link'
                                activeClassName='active'
                                activeLinkClassName='page-link'
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}