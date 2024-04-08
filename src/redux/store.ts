import { createStore, combineReducers, applyMiddleware } from "redux";
import { logActionMiddleware } from "./logActionMiddleware";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
    products: productsReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(logActionMiddleware)
)

export type RootState = ReturnType<typeof rootReducer>;
