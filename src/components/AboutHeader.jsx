"use client"

import { useEffect, useState } from "react"

export default function AboutHeader({ logo, title, text, text1, text2, text3, image}) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const gridColumns = 7
  const gridRows = 7
  const paddingLeft = 24
  const paddingRight = 48
  const extraWidth = 24
  const gridWidth = windowWidth - paddingLeft - paddingRight
  const space = (gridWidth / gridColumns) / 2

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
          aspectRatio: "7/7",
          overflow: "visible",
          display: "grid",
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          boxSizing: "border-box",

        }}
      >
        {/* imagen */}
        <div style={{
            gridColumn: "5 / span 2",
            gridRow: "2 / span 2",
            display: "flex",
        }}>
            <img style={{
                borderRadius: "20px",
                paddingLeft: `${space + 24}px`
            }} src={image}></img>
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

        {/* title */}
        <div
            style={{
              gridColumn: "2 / span 1",
              gridRow: "2 / span 1",
              display: "flex",
            }}
          >
            <p style={{
                fontFamily: "Inter",
                fontSize: "128px",
                fontWeight: "bold",
                color: "white"
            }}>
                {title}
            </p>
        </div>
        
        {/* text */}
        <div
            style={{
              gridColumn: "2 / span 4",
              gridRow: "3 / span 1",
              display: "flex",
              alignItems: "center",
              width: "670px"
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: "20px",
                color: "white",
                whiteSpace: "pre-line",
                marginTop: "24px"
            }}>
                {text}
            </p>
        </div>
        
        {/* text1 */}
        <div
            style={{
              gridColumn: "2 / span 1",
              gridRow: "5 / span 1",
              display: "flex",
              alignItems: "center",
              whiteSpace: "pre-line",
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: "18px",
                color: "white",
                marginTop: "24px"
            }}>
                {text1}
            </p>
        </div>

        {/* text2 */}
        <div
            style={{
              gridColumn: "3 / span 2",
              gridRow: "5 / span 2",
              display: "flex",
              whiteSpace: "pre-line",
              justifyContent: "center"
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: "18px",
                color: "white",
                marginTop: "24px",
                
            }}>
                {text2}
            </p>
        </div>

        {/* text3 */}
        <div
            style={{
              gridColumn: "5 / span 2",
              gridRow: "5 / span 2",
              display: "flex",
              whiteSpace: "pre-line",
              justifyContent: "center"
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: "18px",
                color: "white",
                marginTop: "24px",
                
            }}>
                {text3}
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




