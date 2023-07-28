import axios from 'axios'


export const findAll = async (request) =>{
    try {
        const result = (await axios.get("http://localhost:8080/api/public/product/list?page="
            + request.page +
            "&name=" + request.name)).data;
        return result;
    }catch (e) {
        console.log(e)
    }
}

export const findAllProductType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/type`);
        return result.data;
    }catch (e){
        console.log(e)
    }
}
export const findNewsProduct = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/api/public/product/newProduct?page=0`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const findProductById = async (id) => {
    try {
        const rs = await axios.get(`http://localhost:8080/api/public/product/detail/` + id);
        return rs.data;
    } catch (e) {
        console.log(e)
    }
}

export const getAllProductByType = async (type) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/public/product/productByType/${type}`)
        return res.data;
        } catch (e) {
        console.log(e)
    }
}
