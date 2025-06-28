import Land from "./Land/Land.jsx"
import Home from "./Home/Home.jsx"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Land />} />
      <Route path="/home" element={<Home />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
