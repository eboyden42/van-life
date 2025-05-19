import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
