import { productsApiSlice } from "./api";
import { productsSlice } from "./slice";

const reducer = productsApiSlice.reducer;

export default reducer;

export const { useGetProductsQuery } = productsApiSlice;

export const productsMiddleware = productsApiSlice.middleware;
export const productsReducerPath = productsApiSlice.reducerPath;

export const productsSliceReducer = productsSlice.reducer;

export const { increaseQuantity, decreaseQuantity } = productsSlice.actions
