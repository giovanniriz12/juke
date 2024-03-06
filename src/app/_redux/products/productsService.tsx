import { ICreateProduct } from "@/app/interfaces/requests/ICreateProduct";
import { IPagination } from "@/app/interfaces/requests/IPagination";
import axios from "axios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";
// Get Products
const getProducts = async (offsetAndLimit: IPagination) => {
  const res = await axios.get(
    `${API_BASE_URL}/products?offset=${offsetAndLimit.offset}&limit=${offsetAndLimit.limit}`
  );
  return res;
};

// Create Products
const createProducts = async (payload: ICreateProduct) => {
  const res = await axios.post(`${API_BASE_URL}/products/`, payload);
  return res;
};

const productsService = {
  getProducts,
  createProducts,
};

export default productsService;
