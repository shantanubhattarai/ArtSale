import { IProduct, ProductAction, ProductState } from "@/types";

import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: ProductState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addProduct: (state: ProductState, action: ProductAction) => {
      const alreadyExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (alreadyExists) {
        state.products = state.products.map((product) => {
          if (product.id === alreadyExists.id) {
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          } else return product;
        });
      } else {
        const newProduct: IProduct = {
          id: action.payload.id,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          description: action.payload.description,
          author: action.payload.author,
          quantity: 1,
        };
        state.products.push(newProduct);
      }
      toast("Added to cart!");
    },
    removeProduct: (state: ProductState, action: ProductAction) => {
      const updatedProducts: IProduct[] = state.products.filter(
        (product) => product.id != action.payload.id
      );
      state.products = updatedProducts;
    },
    incrementQuantity: (state: ProductState, action: ProductAction) => {
      const alreadyExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (alreadyExists) {
        state.products = state.products.map((product) => {
          if (product.id === alreadyExists.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else return product;
        });
      }
    },
    decrementQuantity: (state: ProductState, action: ProductAction) => {
      const alreadyExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (alreadyExists) {
        if (alreadyExists.quantity == 1) {
          const updatedProducts: IProduct[] = state.products.filter(
            (product) => product.id != action.payload.id
          );
          state.products = updatedProducts;
        }
        state.products = state.products.map((product) => {
          if (product.id === alreadyExists.id) {
            if (product.quantity > 1) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            } else {
              return product;
            }
          } else return product;
        });
      }
    },
    clearProducts: (state: ProductState, action: ProductAction) => {
      state = { products: [] };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.products };
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  clearProducts,
} = cartSlice.actions;
export const selectProducts = (state: RootState) => state.cartItems.products;
export default cartSlice.reducer;
