import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import SwitchBuds from "../pages/SwitchBuds"
import Titan from "../pages/Titan"
import Stoool from "../pages/Stoool"

const Navbar = () => {
  return (
    <>
      <div style={{
        gridColumn: "3 / span 3",
        gridRow: "1 / span 1",
        display: "flex",
        justifyContent: "center",
      }}>
        <nav
            style={{
                display: "flex",
                gap: "92px",
                backgroundColor: "#ffff",
                marginLeft: "24px",
                width: "calc(100% - 144px)",
                marginTop: "33px",
                height: "calc(100% - 164px)",
                borderRadius: "150px",
                justifyContent: "center",
                alignItems: "center",
              }}
        >
            <Link to="/" style={{ marginRight: "10px", color: "black",  textDecoration: "none", fontFamily: "Nunito", fontWeight: "lighter", fontSize: "29.25px"}}>
                home
            </Link>
            <Link to="/about" style={{ marginRight: "10px", color: "black", textDecoration: "none", fontFamily: "Nunito", fontWeight: "lighter", fontSize: "29.25px"}}>
                About
             </Link>
            <Link to="/switchbuds" style={{ marginRight: "10px", color: "black", textDecoration: "none", fontFamily: "Nunito", fontWeight: "lighter", fontSize: "29.25px" }}>
                SwitchBuds
            </Link>
            <Link to="/titan" style={{ marginRight: "10px", color: "black", textDecoration: "none", fontFamily: "Nunito", fontWeight: "lighter", fontSize: "29.25px" }}>
                Titan
            </Link>
            <Link to="/stoool" style={{ marginRight: "10px", color: "black", textDecoration: "none", fontFamily: "Nunito", fontWeight: "lighter", fontSize: "29.25px"}}>
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
    </>
  );
};

export default Navbar;


