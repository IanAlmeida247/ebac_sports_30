import { configureStore } from '@reduxjs/toolkit'

import { carrinhoApi } from '../services/api'

import carrinhoReducer from '../reducer/carrinho' // importa seu slice aqui

export const store = configureStore({
  reducer: {
    [carrinhoApi.reducerPath]: carrinhoApi.reducer,

    carrinho: carrinhoReducer // adiciona o reducer do carrinho
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carrinhoApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
