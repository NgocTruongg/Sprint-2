import axios from 'axios'

export const findAll = async () =>{
    try {
        const result = await axios.get(`http://localhost:8080/api/product/list?page=0`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}

export const findByName = async (request) =>{
    try {
        const result = (await axios.get("http://localhost:8080/api/product/?page="
            + request.page +
            "&name=" + request.name)).data;
        return result;
    }catch (e) {
        console.log(e)
    }
}

export const findAllProductType = async () => {
    try {
        return (await axios.get(`http://localhost:8080/api/product-type`)).data;
    }catch (e){
        console.log(e)
    }
}

export const findProductById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/product/detail/` + id);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}