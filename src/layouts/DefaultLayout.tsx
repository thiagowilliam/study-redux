import { Outlet } from 'react-router-dom'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
