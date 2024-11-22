import axios from "axios";

export async function ProductsData() {
  const products = await axios.get('http://localhost:3000/api/product');
  console.log(products.data);
  return products;
}