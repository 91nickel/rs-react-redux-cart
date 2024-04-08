import { createStore, combineReducers } from "redux";
import { productsReducer } from "./productsReducer.js";

export const store = createStore(
    combineReducers({
        products: productsReducer
    })
)
