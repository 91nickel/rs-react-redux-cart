import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const orderApiSlice = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
    endpoints(build) {
        return {
            createOrder: build.mutation<{ success: boolean }, void>({
                query: () => ({ url: '/028f7a08-1860-4639-a282-ce76bde05976' }),
            })
        }
    },
})

export const { useCreateOrderMutation } = orderApiSlice;
