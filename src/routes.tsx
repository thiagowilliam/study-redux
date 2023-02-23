import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'))
const Home = lazy(() => import('./pages/Home'))
const Categoria = lazy(() => import('./pages/Categoria'))

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/categoria/:nomeCategoria"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Categoria />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
