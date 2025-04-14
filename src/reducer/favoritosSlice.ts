import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
}

interface FavoritosState {
  produtos: Produto[]
}

const initialState: FavoritosState = {
  produtos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      state.produtos.push(action.payload)
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.produtos = state.produtos.filter(
        (produto) => produto.id !== action.payload
      )
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
