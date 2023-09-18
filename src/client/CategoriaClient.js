import axios from "axios";

export const CategoriaClient = async (tipo) => {
    const BaseUrl = `http://localhost:8080/categoria/tipo/${tipo}`
    console.log("BaseUrl::::::" + BaseUrl)
        return axios.get(BaseUrl)
    
}
