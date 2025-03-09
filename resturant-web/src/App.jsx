import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Aboutus from "./Pages/Aboutus"
import Home from "./Pages/Home"




import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  
  return (
<div className="overflow-x-hidden">
    <ScrollToTop/>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={< Aboutus />} />
</Routes>

</div>
  )
}

export default App
