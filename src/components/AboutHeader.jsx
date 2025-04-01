"use client"

import { useEffect, useState } from "react"

export default function AboutHeader({ logo, title, text, title1, text1, title2, text2, title3, text3, image}) {
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
  const getFontSize3 = () => {
    if (windowWidth >= 1920) {
      return "28px"
    } else if (windowWidth >= 1440) {
      return "24px"
    } else if (windowWidth >= 1280) {
      return "20px"
    } else if (windowWidth >= 768) {
      return "18px"
    } else {
      return "16px"
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

        {/* title */}
        <div
            style={{
              gridColumn: "2 / span 1",
              gridRow: " / span 1",
              display: "flex",
            }}
          >
            <p style={{
                fontFamily: "Inter",
                fontSize: getFontSize(),
                fontWeight: "bold",
                color: "white",
                paddingLeft: "24px"
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
            }}
          >
            <p style={{
                width: "85%",
                fontFamily: "Nunito",
                fontSize: getFontSize2(),
                color: "white",
                whiteSpace: "pre-line",
                paddingLeft: "24px"
            }}>
                {text}
            </p>
        </div>
        
        {/* text1 title */}
        <div
            style={{
              gridColumn: "2 / span 1",
              gridRow: "5 / span 5",
              alignItems: "center",
              
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: getFontSize3(),
                color: "white",
                marginTop: "24px",
                fontWeight: "lighter",
                fontStyle: "italic"
            }}>
                {title1}
            </p>
            <p style={{
                fontFamily: "Nunito",
                fontSize: getFontSize2(),
                color: "white",
                marginTop: "24px",
                fontWeight: "lighter",
                whiteSpace: "pre-line",
            }}>
                {text1}
            </p>
        </div>


          {/* text2 */}
          <div
            style={{
              gridColumn: "3 / span 2",
              gridRow: "5 / span 3",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: getFontSize3(),
                color: "white",
                marginTop: "24px",
                fontWeight: "lighter",
                fontStyle: "italic"
            }}>
                {title2}
            </p>
            <p style={{
                fontFamily: "Nunito",
                fontSize: getFontSize2(),
                color: "white",
                marginTop: "24px",
                fontWeight: "lighter",
                whiteSpace: "pre-line",
            }}>
                {text2}
            </p>
        </div>

        {/* text3 title */}
        <div
            style={{
              gridColumn: "5 / span 2",
              gridRow: "5 / span 3",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{
                fontFamily: "Nunito",
                fontSize: getFontSize3(),
                color: "white",
                marginTop: "24px",
                fontWeight: "lighter",
                fontStyle: "italic"
            }}>
                {title3}
            </p>
            <p style={{
                fontFamily: "Nunito",
                fontSize: getFontSize2(),
                color: "white",
                marginTop: "24px",
                fontWeight: "lighter",
                whiteSpace: "pre-line",
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




