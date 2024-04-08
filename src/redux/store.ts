import { createStore, combineReducers } from "redux";
import { productsReducer } from "./productsReducer";

export const store = createStore(
    combineReducers({
        products: productsReducer
    })
)

export type RootState = ReturnType<typeof store.getState>;
