import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/IProduct';
import { createOrder } from '../order';

const initialState: Record<IProduct['id'], number> = {};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increaseQuantity(state, action: PayloadAction<IProduct['id']>) {
            if (state[action.payload]) {
                state[action.payload]++;
            } else {
                state[action.payload] = 1;
            }
        },
        decreaseQuantity(state, action: PayloadAction<IProduct['id']>) {
            if (state[action.payload] > 0) {
                state[action.payload]--;
            } else {
                state[action.payload] = 0;
            }
        }
    },
    extraReducers(builder) {
        builder.addMatcher(
            createOrder.matchFulfilled,
            () => initialState
        )
    },
})
