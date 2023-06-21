import './App.css'
import Home from "./routes/Home.jsx"
import Comunidade from "./routes/Comunidade.jsx"
import Desenvolvedores from "./routes/Desenvolvedores.jsx"
import Download from "./routes/Download.jsx"
import Faq from "./routes/Faq.jsx"
import Login from "./routes/Login.jsx"
import Registro from "./routes/Registro.jsx"
import Sobre from "./routes/Sobre.jsx"
import { Routes, Link } from 'react-router-dom'

function App() {

  return (
    <>

    <Routes>

      <Routes path='/' element={<Home />} />
      <Routes path='/comunidade' element={<Comunidade />} />
      <Routes path='/desenvolvedores' element={<Desenvolvedores />} />
      <Routes path='/download' element={<Download />} />
      <Routes path='/faq' element={<Faq />} />
      <Routes path='/login' element={<Login />} />
      <Routes path='/registro' element={<Registro />} />
      <Routes path='/sobre' element={<Sobre />} />

    </Routes>

    </>
  )
}

export default App
