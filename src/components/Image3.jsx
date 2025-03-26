"use client"

import { useEffect, useState } from "react"

export default function Image3({ image1, image2, image3 }) {
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
      {/* Contenedor del fondo desplazado 24px hacia abajo */}
      <div
        style={{
          position: "absolute",
          top: "24px", 
          left: 0,
          right: 0,
          height: "calc(100% - 24px)",
          zIndex: -1, 
        }}
      />

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
        <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: `-${extraWidth}px`,
            zIndex: 0,
            display: "flex",
            gap: "94px"
          }}>
            <div
                style={{
                gridColumn: "1 / span 2",
                gridRow: "1 / span 4",
                display: "flex",
                overflow: "hidden", 
                marginLeft: "24px",
                }}
            >
                <img
                    src={image1}
                    alt="Imagen"
                    style={{
                        width: "calc(100% + 19px)",
                        height: "calc(100% - 24px)",
                        objectFit: "cover",
                        paddingTop: "24px"
                    }}
                />
            </div>
            <div
                style={{
                gridColumn: "5 / span 7 ",
                gridRow: "1 / span 4",
                display: "flex",
                overflow: "hidden", 
                }}
            >
                <img
                    src={image2}
                    alt="Imagen"
                    style={{
                        width: "calc(100%) ",
                        height: "calc(100% - 24px)",
                        objectFit: "cover",
                        paddingTop: "24px"
                    }}
                />
            </div>

            <div
                style={{
                gridColumn: "5 / span 7 ",
                gridRow: "1 / span 4",
                display: "flex",
                overflow: "hidden", 
                marginRight: "24px",
                }}
            >
                <img
                    src={image3}
                    alt="Imagen"
                    style={{
                        width: "calc(100%) ",
                        height: "calc(100% - 24px)",
                        objectFit: "cover",
                        paddingTop: "24px"
                    }}
                />
            </div>
        </div>

        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "0px",
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
                right: `${extraWidth}px`,
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
