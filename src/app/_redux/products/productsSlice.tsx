import {
  IProductResponse,
  IProductCategory,
  IProduct,
} from "@/app/_interfaces/responses/IProductResponse";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsService from "./productsService";
import { IPagination } from "@/app/_interfaces/requests/IPagination";
import { ICreateProduct } from "@/app/_interfaces/requests/ICreateProduct";

const initialState: IProduct = {
  product: [],
  page: 0,
};

export const getProducts = createAsyncThunk(
  "products/get",
  async (payload: IPagination, thunkAPI) => {
    try {
      return await productsService.getProducts(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postProducts = createAsyncThunk(
  "products/post",
  async (payload: ICreateProduct, thunkAPI) => {
    try {
      return await productsService.createProducts(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setGetProducts: (state, action) => {},
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Get Limit Todos
      .addCase(getProducts.pending, (state, action) => {})
      .addCase(getProducts.fulfilled, (state, action) => {
        state.product = action.payload.data;
      })
      .addCase(getProducts.rejected, (state, action) => {})

      //Post Limit Todos
      .addCase(postProducts.pending, (state, action) => {})
      .addCase(postProducts.fulfilled, (state, action) => {})
      .addCase(postProducts.rejected, (state, action) => {});
  },
});

export const { setGetProducts, setPage } = productsSlice.actions;

export default productsSlice.reducer;
