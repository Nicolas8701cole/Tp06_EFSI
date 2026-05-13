import axios from "axios"

const URL = "https://api.thecatapi.com/v1/images/search"
const API_KEY = import.meta.env.VITE_CAT_API_KEY

export async function traerImgGatos(cantidad = 12) {
  const respuesta = await axios.get(URL, {
    headers: { //Esto no será visible
      "x-api-key": API_KEY, //Nos lo aclara en el email
      //Es el nombre específico de la credencial para The Cat API
    },
    params: {
      limit: cantidad,
      mime_types: "jpg,png", //Que tipos
      size: "med", //Tamaño mediano
      order: "RANDOM",
      format: "json",
    },
  })

  return respuesta.data
}