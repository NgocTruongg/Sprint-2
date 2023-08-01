import React, {useContext, useEffect, useState} from "react";
import {findAll} from "../../service/product/productService";
import ReactPaginate from "react-paginate";
import "../../css/product.css"
import {Link} from "react-router-dom";
import {addCart} from "../../service/cart/CartService";
import Swal from "sweetalert2";
import {ValueIconCartContext} from "../ValueIconCartContext";


export function Product() {
    const token = localStorage.getItem("TOKEN");
    const username = localStorage.getItem("USERNAME");
    const [products, setProducts] = useState([]);
    const {iconQuantity, setIconQuantity} = useContext(ValueIconCartContext);
    const [request, setRequest] = useState({
        page: 0,
        name: "",
    })
    const [pageCount, setPageCount] = useState(0);


    const handlePageOnclick = (event) => {
        setRequest((prev) => ({...prev, page: event.selected}))
    }

    useEffect(() => {
        (async () => {
            const productList = await findAll(request);
            setPageCount(productList.totalPages);
            setProducts(productList.content);
        })()
    }, [request]);


    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        document.title = "Sản phẩm";
    }, []);
    const AddCart = async (id) => {
        const cart = {
            quantity: 1,
            status: true,
            product: ""
        }
        try {
            await addCart({...cart, quantity: quantity , product: id}, token);
            setIconQuantity(iconQuantity + 1)
            Swal.fire({
                title: 'Thông báo',
                text: 'Thêm thành công sản phẩm vào giỏ hàng!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
                    className="title-product">Sản Phẩm</span>
                </h2>
                <div className="row px-xl-5">
                    { products.map((product, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                                    <div className="product-item bg-light mb-4">
                                        <div className="product-img position-relative overflow-hidden">
                                            <Link to={`/${product.productId}`} className="card-text ">
                                                <img className="img-fluid w-100" src={product.image} alt=""/>
                                            </Link>
                                            <div className="product-action">
                                                <Link className="btn btn-warning mr-2">
                                                    <i className="bi bi-cart3" onClick={() => AddCart(product?.productId)}/>
                                                </Link>
                                            </div>
                                        </div>
                                        <div style={{textAlign: "center", textDecoration: "none"}}>
                                            <div>
                                                <Link to={`/detail/${product.productId}`} className="title-link">
                                                    {product.productName.length > 15
                                                        ? product.productName.slice(0, 15) + "..."
                                                        : product.productName}
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <p className="card-price">
                                                    <span style={{color: "red"}}>{new Intl.NumberFormat().format(product.price)} VND</span>
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
                        <div style={{marginLeft: "37%"}}>
                            <ReactPaginate
                                previousLabel="Trước"
                                nextLabel="Sau"
                                pageCount={pageCount}
                                onPageChange={handlePageOnclick}
                                containerClassName='pagination'
                                previousClassName='page-item'
                                previousLinkClassName='btn btn-warning'
                                nextClassName='page-item'
                                nextLinkClassName='btn btn-warning'
                                pageClassName='page-item'
                                pageLinkClassName='btn btn-warning'
                                activeClassName='active'
                                activeLinkClassName='btn btn-danger'
                                // pageRangeDisplayed={2} // Hiển thị 2 trang trên mỗi lần render
                                // marginPagesDisplayed={1} // Hiển thị 1 trang ở đầu và cuối danh sách trang
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}