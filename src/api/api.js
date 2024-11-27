import axios from "axios";

export async function ProductsData() {
  const products = await axios.get('./data.json')
  return products;
}
