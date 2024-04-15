import { orderApiSlice } from "./api";

const reducer = orderApiSlice.reducer;

export default reducer;

export const { useCreateOrderMutation } = orderApiSlice;

export const orderMiddleware = orderApiSlice.middleware;
export const orderReducerPath = orderApiSlice.reducerPath;
export const { createOrder } = orderApiSlice.endpoints;
