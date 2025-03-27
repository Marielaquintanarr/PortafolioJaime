"use client"
import { useEffect, useState } from "react"
import ImagenTexto2 from "./ImagenTexto2"
import "./style.css"

export default function Footer({ text1, text2, text3 }) {
  const [windowWidth, setWindowWidth] = useState(0)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const gridColumns = 7
  const gridRows = 1
  const paddingLeft = 24
  const paddingRight = 48
  const extraWidth = 24

  const gridWidth = windowWidth - paddingLeft - paddingRight

  const getFontSize = () => {
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
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `${gridWidth}px`,
          aspectRatio: "7/1",
          overflow: "visible",
          display: "grid",
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          boxSizing: "border-box",
        }}
      >
        {/* Nombre */}
        <div
          style={{
            gridColumn: `1 / span 3`,
            gridRow: "1 / span 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "Nunito",
              fontWeight: "lighter",
              fontSize: getFontSize(),
              marginLeft: "24px",
              position: "relative",
              zIndex: 20,
            }}
          >
            2025 @ Jaime Barba
          </p>
        </div>
        {/* Redes */}
        <div
          style={{
            gridColumn: "7 / span 1",
            gridRow: "1 / span 1",
            alignItems: "flex-start",
            paddingLeft: "24px",
            paddingTop: "24px",
            position: "relative",
            zIndex: 20,
            display: "flex",
            flexDirection: "column", // <- este hace la magia
            gap: "4px" // si quieres separación entre links
          }}
        >
          <a
            href="https://www.zara.com/mx/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hover ? "#61349e" : "white",
              backgroundColor: "transparent",
              fontFamily: "Nunito",
              fontWeight: "lighter",
              fontSize: getFontSize(),
              padding: "0px",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            linkedin
          </a>
          <a
            href="https://github.com/Marielaquintanarr/Sistema-padel"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hover ? "#61349e" : "white",
              backgroundColor: "transparent",
              fontFamily: "Nunito",
              fontWeight: "lighter",
              fontSize: getFontSize(),
              padding: "0px",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            behance
          </a>
          <a
            href="https://www.oracle.com/mx/cloud/sign-in.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: hover ? "#61349e" : "white",
              backgroundColor: "transparent",
              fontFamily: "Nunito",
              fontWeight: "lighter",
              fontSize: getFontSize(),
              padding: "0px",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            instagram
          </a>
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
            {/* Líneas verticales */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: `${extraWidth}px`,
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 24px, transparent 1px)`,
                backgroundSize: `calc(100% / ${gridColumns}) 100%`,
                backgroundRepeat: "repeat-x",
              }}
            />
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
