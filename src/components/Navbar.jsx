"use client";
import { Routes, Route, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [windowWidth, setWindowWidth] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridColumns = 7;
  const gridRows = 1;
  const paddingLeft = 24;
  const paddingRight = 48;
  const extraWidth = 24;

  const gridWidth = windowWidth - paddingLeft - paddingRight;

  const getDimensions = () => {
    if (windowWidth >= 1920) return [61, 48.68];
    if (windowWidth >= 1440) return [48, 38.3];
    if (windowWidth >= 1280) return [42, 33.5];
    if (windowWidth >= 768) return [32, 25.5];
    return [24, 19];
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...gridStyle, width: `${gridWidth}px` }}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <img src={logo} alt="Logo" style={{ ...logoStyle, width: `${getDimensions()[0]}px`, height: `${getDimensions()[1]}px` }} />
        </div>

        {/* Navbar */}
        <div style={navbarContainerStyle}>
          <nav style={navStyle}>
            <Link to="/" style={{ ...linkStyle, ...(isActive("/") ? activeStyle : {}) }}>home</Link>

            {/* Dropdown Work */}
            <div
              style={{ ...dropdownContainer, position: "relative" }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span style={{ ...linkStyle, ...(isActive("/switchbuds") ? activeStyle : {}), ...(isActive("/titan") ? activeStyle : {}), ...(isActive("/redesign") ? activeStyle : {}), ...(isActive("/stoool") ? activeStyle : {}) }}>
                work
              </span>
              {dropdownOpen && (
                <ul style={{ ...dropdownMenu, position: "absolute", top: "100%", left: 0, zIndex: 1000 }}>
                  <li><Link to="/switchbuds" style={{ ...dropdownItem }}>Switch-buds</Link></li>
                  <li><Link to="/titan" style={{ ...dropdownItem }}>Titan</Link></li>
                  <li><Link to="/redesign" style={{ ...dropdownItem }}>Libre re-design</Link></li>
                  <li><Link to="/stoool" style={{ ...dropdownItem }}>Stoool</Link></li>
                </ul>
              )}
            </div>
            <Link to="/about" style={{ ...linkStyle, ...(isActive("/about") ? activeStyle : {}) }}>about</Link>
            <Link to="/more" style={{ ...linkStyle, ...(isActive("/more") ? activeStyle : {}) }}>more</Link>
          </nav>
        </div>

        {/* Grid overlay */}
        <div style={gridOverlayStyle}>
          <div style={gridLinesStyle}>
            {/* Líneas verticales */}
            <div style={verticalLinesStyle} />
            <div style={rightBorderStyle} />
            {/* Líneas horizontales */}
            <div style={horizontalLinesStyle} />
            <div style={bottomBorderStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

const activeStyle = {
  backgroundColor: "#F5EFFF",
  borderRadius: "32.5px",
  width: "130px",
  height: "50px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)"
};

const containerStyle = {
  position: "relative",
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "48px",
  boxSizing: "border-box",
  justifyContent: "center",
  alignItems: "center",
};

const gridStyle = {
  position: "relative",
  aspectRatio: "7/1",
  overflow: "visible",
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridTemplateRows: "repeat(1, 1fr)",
  boxSizing: "border-box",
};

const logoContainerStyle = {
  gridColumn: "1 / span 1",
  gridRow: "1 / span 1",
  display: "flex",
};

const logoStyle = {
  paddingLeft: "24px",
  paddingTop: "24px",
};

const navbarContainerStyle = {
  gridColumn: "3 / span 3",
  gridRow: "1 / span 1",
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  marginTop: "10px"

};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  marginLeft: "24px",
  marginTop: "24px",
  backgroundColor: "rgba(255, 255, 255, 0.58)",
  color: "black",
  borderRadius: "39px",
  width: "624px",
  height: "60px"
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
  fontFamily: "Nunito",
  fontWeight: "lighter",
  fontSize: "29.25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const dropdownContainer = {
  position: "relative",
};

const dropdownMenu = {
  marginTop: "3px",
  position: "absolute",
  backgroundColor: "rgba(255, 255, 255, 0.58)",
  listStyle: "none",
  borderBottomRightRadius: "20px",
  borderBottomLeftRadius: "20px"
};

const dropdownItem = {
  display: "block",
  padding: "8px 16px",
  color: "black",
  textDecoration: "none",
  whiteSpace: "nowrap",
  fontFamily: "Nunito",
  fontWeight: "lighter",
  fontSize: "24px"
};

const gridOverlayStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: "0px",
  right: "-24px",
  zIndex: 10,
};

const gridLinesStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

const verticalLinesStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: "24px",
  backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5) 24px, transparent 1px)",
  backgroundSize: "calc(100% / 7) 100%",
  backgroundRepeat: "repeat-x",
};

const rightBorderStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  width: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const horizontalLinesStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 24px, transparent 1px)",
  backgroundSize: "100% calc(100% / 1)",
  backgroundRepeat: "repeat-y",
};

const bottomBorderStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "1px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};
