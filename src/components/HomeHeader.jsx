"use client"
import { Routes, Route, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Marquee from "./Marquee";

export default function HomeHeader({ logo, text }) {
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

  // El ancho real del grid sin contar el extraWidth
  const gridWidth = windowWidth - paddingLeft - paddingRight
  const altura = ((gridWidth / 7) / 2) + 48

  const getFontSize = () => {
    if (windowWidth >= 1920) {
      return "24px"
    } else if (windowWidth >= 1440) {
      return "20px"
    } else if (windowWidth >= 1280) {
      return "18px"
    } else if (windowWidth >= 768) {
      return "14px"
    } else {
      return "12px"
    }
  }

  const getDimensions = () => {
    if (windowWidth >= 1920) {
      return [61, 48.68];
    } else if (windowWidth >= 1440) {
      return [48, 38.3]; // 80% aprox.
    } else if (windowWidth >= 1280) {
      return [42, 33.5]; // 70% aprox.
    } else if (windowWidth >= 768) {
      return [32, 25.5]; // 52% aprox.
    } else {
      return [24, 19]; // 40% aprox.
    }
  }
  
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
        
        {/* logo */}
        <div style={{
              gridColumn: "1 / span 1",
              gridRow: "1 / span 1",
              display: "flex",

            }}>
                <img style={{
                    paddingLeft: "24px",
                    paddingTop: "24px",
                    width: `${getDimensions()[0]}px`,
                    height: `${getDimensions()[1]}px`
                }} src={logo}></img>
        </div>

        <div style={{
              gridColumn: "1 / span 7",
              gridRow: "2 / span 2",
              width: "100vw",
              marginTop: `-${altura}px`
            }}>
              <Marquee />
        </div>

        {/* text */}
        <div
            style={{
              gridColumn: "2 / span 2",
              gridRow: "4 / span 1",
            }}
          >
              <p
                style={{
                  alignSelf: "start",
                  paddingLeft: "24px",
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "lighter",
                  fontSize: getFontSize(), 
                  margin: 0,
                  textAlign: "left", 
                  whiteSpace: "pre-line",
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

