import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from './reducers/categorias'
import itensReducer from './reducers/itens'

export const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    itens: itensReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
