"use client"

import { useEffect, useState } from "react"

export default function ImagenTexto3({ title1, title2, text1, text2, image }) {
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
        {/* title1 */}
        <div style={{
            gridColumn: "1 / span 2",
            gridRow: "1 / span 1",
            display: "flex",
            alignSelf: "end",
        }}>
            <p style={{
                display: "flex",
                marginLeft: "24px",
                fontFamily: "Nunito",
                color: "white",
                fontSize: "48px",
                fontWeight: "normal"
              }}>{title1}</p>
        </div>

        {/* text1 */}
        <div style={{
            gridColumn: "1 / span 3",
            gridRow: "2 / span 1",
            display: "flex",
            alignSelf: "end",
        }}>
            <p style={{
                display: "flex",
                marginLeft: "24px",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                fontSize: "24px",
                color: "white"
              }}>{text1}</p>
        </div>

        {/* title2 */}
        <div style={{
            gridColumn: "1 / span 2",
            gridRow: "3 / span 1",
            display: "flex",
            alignSelf: "end"
        }}>
            <p style={{
                display: "flex",
                marginLeft: "24px",
                fontFamily: "Nunito",
                color: "white",
                fontSize: "48px",
                fontWeight: "normal"
              }}>{title2}</p>
        </div>

        {/* text2 */}
        <div style={{
            gridColumn: "1 / span 2",
            gridRow: "4 / span 1",
            display: "flex",
            alignSelf: "end"
        }}>
            <p style={{
                marginLeft: "24px",
                fontFamily: "Nunito",
                fontWeight: "lighter",
                fontSize: "24px",
                color: "white"
              }}>{text2}</p>
        </div>
        
        {/* image */}
        <div
            style={{
                gridColumn: "5 / span 3",
                gridRow: "1  / span 5",
                alignSelf: "start",
            }}
          >
            <img
              src={image}
              alt="Imagen"
              style={{
                height: "100%",
                width: "calc(100% - 24px)",
                objectFit: "contain",
                marginLeft: "24px",
                marginTop: "24px"
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

