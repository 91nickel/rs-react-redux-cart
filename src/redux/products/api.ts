import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../types/IProduct';

export const productsApiSlice = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
    endpoints(builder) {
        return {
            getProducts: builder.query<IProduct[], void>({
                query: () => ({ url: '/cc35d073-1953-4dbc-b0b8-b0bedf958e44' })
            })
        }
    }
})
