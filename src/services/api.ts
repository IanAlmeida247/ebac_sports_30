import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carrinhoApi = createApi({
  reducerPath: 'carrinhoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.exemplo.com/' }),
  endpoints: (builder) => ({
    fetchProdutos: builder.query<any, void>({
      query: () => 'produtos'
    })
  })
})

export const { useFetchProdutosQuery } = carrinhoApi
