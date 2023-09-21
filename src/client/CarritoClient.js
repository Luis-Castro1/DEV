import axios from "axios";

export const Carritoclient = async (selectedSize, userId, quantity) =>{
    const requestData = {
        usuario_id: userId,
        referencia_id: selectedSize,
        cantidad: quantity
      };
      console.log("requestData " + requestData)
    const BaseUrl = `http://localhost:8080/carrito`
    console.log("BaseUrl::::::" + BaseUrl)
        return axios.post(BaseUrl,requestData)
}