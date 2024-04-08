import { createStore, combineReducers, applyMiddleware } from "redux";
import { logActionMiddleware } from "./logActionMiddleware";
import { orderReducer } from "./orderReducer";
import { productsReducer } from "./productsReducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    products: productsReducer,
    order: orderReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logActionMiddleware)
)

export type RootState = ReturnType<typeof rootReducer>;
