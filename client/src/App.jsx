// * Imports
import { Outlet } from 'react-router-dom'

// ? Components
import Nav from './component/Nav'
import Footer from './component/Footer'


function App() {

  return (
    <>
    <Nav />
    <main>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
