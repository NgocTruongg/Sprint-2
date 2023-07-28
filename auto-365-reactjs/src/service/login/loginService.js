import axios from "axios";

export const login = async (values) => {
    try {
        const result = await axios.post(`http://localhost:8080/api/public/signin`, values)
        return result.data;
    } catch (error) {
        console.log(error);
    }
}