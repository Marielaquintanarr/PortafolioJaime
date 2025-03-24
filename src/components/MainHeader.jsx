import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Marquee from "./Marquee";
export default function SwitchBudsGrid({ image, label }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Actualizar el ancho de la ventana al cargar y al cambiar el tamaño
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridColumns = 7;
  const gridRows = 4;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{
      paddingTop: "24px",
      paddingLeft: "24px",
      paddingRight: "48px",
      backgroundColor: "#1f1f1f",
      boxSizing: "border-box",
    }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "7/4",
          overflow: "hidden"
        }}
      >
        <div style={{marginLeft: "25px", marginTop: "25px", width: "48px", height:"48.68"}}>
          <img src={logo}></img>
        </div>
        <div style={{marginRight: "200px"}}>
          <Navbar />
        </div>
        <div>
          <Marquee />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
          }}
        >
          <div
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.5) 24px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 24px, transparent 1px)
            `,
              backgroundSize: `calc(100% / ${gridColumns}) calc(100% / ${gridRows})`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        
      </div>
    </div>
  );
}
