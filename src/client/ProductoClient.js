import axios from "axios";

export const Productoclient = async (categoria_id) =>{
    const BaseUrl = `http://localhost:8080/producto/categoriaId/${categoria_id}`
    console.log("BaseUrl::::::" + BaseUrl)
        return axios.get(BaseUrl)
}