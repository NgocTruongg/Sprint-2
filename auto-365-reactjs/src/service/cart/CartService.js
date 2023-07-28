import axios from "axios";
import Swal from "sweetalert2";

export const findCartByCustomerId = async () => {
    debugger
    try {
        const result = await axios.get(`http://localhost:8080/api/user/cart`, {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                    },
            }
        )
        return result.data
    } catch (e) {
        console.log(e);
    }
}

export const addCart = async (cart) => {
    try {
        await axios.post(`http://localhost:8080/api/user/cart/add`, {...cart}, {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                    },
            }
        )
    } catch (e) {
        console.log(e)
    }
}
export const updateCart = async (cart) => {
    try {
        await axios.put(`http://localhost:8080/api/user/cart/update`, {...cart}, {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                    },
            }
        )
    } catch (e) {
        Swal.fire({
            title: 'Thông báo',
            text: 'Sản phẩm trong kho đã hết!',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    }
}
export const deleteCart = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/user/cart/delete/` + id, {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                    },
            }
        )
    } catch (e) {
        console.log(e);
    }
}