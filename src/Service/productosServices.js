import axios from "../Config/axios";
export async function getAllProductos(buscar) {
  return axios.get("/sites/MLA/search?q=" + buscar);
}
export async function getByIdProductos(id) {
  return axios.get("/items/" + id);
}
