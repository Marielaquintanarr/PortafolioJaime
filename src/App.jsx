import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SwitchBuds from "./pages/SwitchBuds"
import Titan from "./pages/Titan"
import Stoool from "./pages/Stoool"

import "./index.css"

function App() {
  return (
    <div
    >
      <nav
        style={{
          backgroundColor: "#1A1A1D",
          color: "ffff",
        }}
      >
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px", color: "white" }}>
          About
        </Link>
        <Link to="/switchbuds" style={{ marginRight: "10px", color: "white" }}>
          SwitchBuds
        </Link>
        <Link to="/titan" style={{ marginRight: "10px", color: "white" }}>
          Titan
        </Link>
        <Link to="/stoool" style={{ marginRight: "10px", color: "white" }}>
          Stool
        </Link>
      </nav>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/switchbuds" element={<SwitchBuds />} />
          <Route path="/titan" element={<Titan />} />
          <Route path="/stoool" element={<Stoool />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;

