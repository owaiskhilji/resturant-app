import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
<BrowserRouter>
    <Navbar/>
    <App />
  <Footer/>
</BrowserRouter>
   </StrictMode>,
)
