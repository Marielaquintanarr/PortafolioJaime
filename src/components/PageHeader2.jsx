"use client"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function PageHeader2({ logo, title, text }) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const gridColumns = 7
  const gridRows = 3
  const paddingLeft = 24
  const paddingRight = 48
  const extraWidth = 24

  const getFontSize = () => {
    if (windowWidth >= 1920) {
      return "36px"
    } else if (windowWidth >= 1440) {
      return "30px"
    } else if (windowWidth >= 1280) {
      return "24px"
    } else if (windowWidth >= 768) {
      return "18px"
    } else {
      return "14px"
    }
  }
  // El ancho real del grid sin contar el extraWidth
  const gridWidth = windowWidth - paddingLeft - paddingRight

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "start",
        justifyContent: "flex-start",
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `${gridWidth}px`,
          aspectRatio: "7/3",
          overflow: "visible",
          display: "grid",
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          boxSizing: "border-box",

        }}
      >
        {/* navbar
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
   
        </div> */}

        {/* logo */}
        <div style={{
              gridColumn: "1 / span 1",
              gridRow: "1 / span 1",
              display: "flex",

            }}>
                <img style={{
                    paddingLeft: "24px",
                    paddingTop: "24px",
                    width: "61px",
                    height: "48.68px"
                }} src={logo}></img>
        </div>
        {/* title */}
        <div
            style={{
              gridColumn: "1 / span 7",
              gridRow: "2 / span 1",
              display: "flex",
              marginLeft: "24px"
            }}
          >
              <p
                style={{
                  color: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: "128px", 
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {title}
              </p>
        </div>

        {/* text */}
        <div
            style={{
              gridColumn: "1 / span 2",
              gridRow: "3 / span 2",
              display: "flex",
            }}
          >
              <p
                style={{
                  paddingLeft: "24px",
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "lighter",
                  fontSize: "18px", 
                  margin: 0,
                  textAlign: "left", 
                  whiteSpace: "pre-line",
                  marginTop: "24px"
                }}
              >
                {text}
              </p>
        </div>

        
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `0px`,
            right: `-${extraWidth}px`, 
            zIndex: 10,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Líneas verticales internas */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: `${extraWidth}px`, // Dejamos espacio para el borde derecho ancho
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 24px, transparent 1px)`,
                backgroundSize: `calc(100% / ${gridColumns}) 100%`,
                backgroundRepeat: "repeat-x",
              }}
            />

            {/* Línea vertical final (borde derecho) con ancho de 24px */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: `${extraWidth}px`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />

            {/* Líneas horizontales */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 24px, transparent 1px)`,
                backgroundSize: `100% calc(100% / ${gridRows})`,
                backgroundRepeat: "repeat-y",
              }}
            />

            {/* Línea horizontal final (borde inferior) */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "1px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

