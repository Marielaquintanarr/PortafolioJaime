"use client"

import { useEffect, useState } from "react"

export default function ImagenYTexto({ image, text, width, height }) {
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
      return "24px"
    } else if (windowWidth >= 1440) {
      return "20px"
    } else if (windowWidth >= 1280) {
      return "17px"
    } else if (windowWidth >= 768) {
      return "15px"
    } else {
      return "9px"
    }
  }

  const getColumns = () => {
    if (windowWidth < 768) {
      return [2, 3]
    }else{
      return [2, 3]
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
        {/* texto */}
        <div
            style={{
              gridColumn: `${getColumns()[0]} / span ${getColumns()[-1]})`,
              gridRow: "2 / span 3",
              display: "flex",
              alignItems: "center"

            }}
          >
             <div
              style={{
                width:  width, 
                height: height,
                display: "flex",
                marginLeft: "24px",
                alignItems: "center"
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "lighter",
                  fontSize: getFontSize(), 
                  margin: 0,
                  textAlign: "left", 

                }}
              >
                {text}
              </p>
            </div>
        </div>

        {/* Imagen derecha */}
        <div
            style={{
              gridColumn: "5 / span 2",
              gridRow: "2 / span 3",
              display: "flex",
              overflow: "hidden", 
            }}
          >
            <img
              src={image}
              alt="Imagen"
              style={{
                width: "calc(100%)",
                height: "calc(100%)",
                objectFit: "cover",
                paddingLeft: "24px",
                paddingTop: "24px"
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

