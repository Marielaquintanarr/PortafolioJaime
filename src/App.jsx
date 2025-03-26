import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SwitchBuds from "./pages/SwitchBuds"
import Titan from "./pages/Titan"
import Stoool from "./pages/Stoool"
import Redesign from "./pages/Redesign"
import "./index.css"
import Footer from "./components/Footer"
const text5 = `linkedin
behance
instagram`;

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
        <Link to="/redesign" style={{ marginRight: "10px", color: "white" }}>
          Redesign
        </Link>
      </nav>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/switchbuds" element={<SwitchBuds />} />
          <Route path="/titan" element={<Titan />} />
          <Route path="/stoool" element={<Stoool />} />
          <Route path="/redesign" element={<Redesign />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;

