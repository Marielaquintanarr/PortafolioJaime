"use client"

import { useEffect, useState } from "react"

export default function SBHeader({ logo, image, text, title, width, height }) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const gridColumns = 7
  const gridRows = 5
  const paddingLeft = 24
  const paddingRight = 48
  const extraWidth = 24

  // El ancho real del grid sin contar el extraWidth
  const gridWidth = windowWidth - paddingLeft - paddingRight
  const getFontSize = () => {
    if (windowWidth >= 1920) {
      return "128px"
    } else if (windowWidth >= 1440) {
      return "96px"
    } else if (windowWidth >= 1280) {
      return "72px"
    } else if (windowWidth >= 768) {
      return "48px"
    } else {
      return "32px"
    }
  }

  const getFontSize2 = () => {
    if (windowWidth >= 1920) {
      return "20px"
    } else if (windowWidth >= 1440) {
      return "18px"
    } else if (windowWidth >= 1280) {
      return "16px"
    } else if (windowWidth >= 768) {
      return "14px"
    } else {
      return "12px"
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
          aspectRatio: "7/5",
          overflow: "visible",
          display: "grid",
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          boxSizing: "border-box",

        }}
      >
        {/* title */}
        <div
            style={{
              gridColumn: "1 / span 7",
              gridRow: "2 / span 13",
              display: "flex",

            }}
          >
             <div
              style={{
                width:  width, 
                height: height,
                display: "flex",
                marginLeft: "24px",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: getFontSize(), 
                  margin: 0,
                  textAlign: "left", 
                }}
              >
                {title}
              </p>
            </div>
        </div>
        

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

        {/* texto */}
        <div
            style={{
              gridColumn: "1 / span 3",
              gridRow: "3 / span 3",
              display: "flex",

            }}
          >
             <div
              style={{
                display: "flex",
                marginLeft: "24px",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "lighter",
                  fontSize: getFontSize2(), 
                  margin: 0,
                  paddingTop: "24px",
                  textAlign: "left", 
                  whiteSpace: "pre-line",
                }}
              >
                {text}
              </p>
            </div>
        </div>

        {/* imagen */}
        <div
            style={{
                gridColumn: "3 / -1",
                gridRow: "1  / 5"
            }}
          >
            <img
              src={image}
              alt="Imagen"
              style={{
                width: "calc(100% + 24px)",
                height: "calc(100% + 24px)",
                objectFit: "cover",
                position: "relative",
                right: "-24px",
                top: "-24px"
              }}
            />
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

