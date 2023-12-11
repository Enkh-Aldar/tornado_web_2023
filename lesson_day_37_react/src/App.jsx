import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Pages from './components/Pages'
import Login from './components/Login'
import Contact from './components/Contact'
import Register from './components/Register'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pages title={'Home'} />} />
        <Route path="/about" element={<Pages title={'About'} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
