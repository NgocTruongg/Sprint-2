import axios from "axios";


export const findCustomer = async () => {
    debugger
    try {
        const result = await axios.get(`http://localhost:8080/api/user/customer` , {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                    },
            }
        )
        console.log(result);
    }catch (e){
        console.log(e);
    }
}