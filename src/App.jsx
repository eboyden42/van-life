import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
