import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./routes/Home.jsx"
import Comunidade from "./routes/Comunidade.jsx"
import Desenvolvedores from "./routes/Desenvolvedores.jsx"
import Download from "./routes/Download.jsx"
import Faq from "./routes/Faq.jsx"
import Login from "./routes/Login.jsx"
import Registro from "./routes/Registro.jsx"
import Sobre from "./routes/Sobre.jsx"
import { Routes, Link } from 'react-router-dom'


const router = createBrowserRouter([

  {

    path: "/", 
    element: <Home />

  },

  {

    path: "comunidade", 
    element: <Comunidade />

  },

  {

    path: "desenvolvedores", 
    element: <Desenvolvedores />

  },

  {

    path: "download", 
    element: <Download />

  },

  {

    path: "faq", 
    element: <Faq />

  },

  {

    path: "login", 
    element: <Login />

  },

  {

    path: "registro", 
    element: <Registro />

  },

  {

    path: "sobre", 
    element: <Sobre />

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
