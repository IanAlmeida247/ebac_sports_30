import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
}

interface CarrinhoState {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      state.produtos.push(action.payload)
    },
    removerProduto: (state, action: PayloadAction<number>) => {
      state.produtos = state.produtos.filter(
        (produto) => produto.id !== action.payload
      )
    }
  }
})

export const { adicionarProduto, removerProduto } = carrinhoSlice.actions
export default carrinhoSlice.reducer
