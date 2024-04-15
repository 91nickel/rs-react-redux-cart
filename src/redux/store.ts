import { combineReducers } from "redux";
import { logActionMiddleware } from "./logActionMiddleware";
import { persistReducer, persistStore, FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from '@reduxjs/toolkit'
import orderReducer, { orderMiddleware, orderReducerPath } from "./order";
import productsReducer, { productsMiddleware, productsReducerPath, productsSliceReducer } from "./products";

const rootReducer = persistReducer(
    { key: 'redux', storage: storage, throttle: 100000 },
    combineReducers({
        products: productsSliceReducer,
        [orderReducerPath]: orderReducer,
        [productsReducerPath]: productsReducer
    })
);

export const store = configureStore(
    {
        reducer: rootReducer,
        devTools: true,
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
                }
            }).concat([
                orderMiddleware,
                productsMiddleware,
                logActionMiddleware,
            ])
        }
    }
)

export const persistor = persistStore(store);

// @ts-ignore
window.persistor = persistor;

export type RootState = ReturnType<typeof rootReducer>;
