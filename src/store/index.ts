import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from './reducers/categorias'
import itensReducer from './reducers/itens'
import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    itens: itensReducer,
    carrinho: carrinhoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
