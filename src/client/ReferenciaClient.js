import axios from "axios";

export const Referenciaclient = async (producto_id) =>{
    const BaseUrl = `http://localhost:8080/referencia/productoId/${producto_id}`
    console.log("BaseUrl::::::" + BaseUrl)
        return axios.get(BaseUrl)
}