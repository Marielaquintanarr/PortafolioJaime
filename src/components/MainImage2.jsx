"use client"

import { useEffect, useState } from "react"

export default function MainImage2({ image }) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const gridColumns = 7
  const gridRows = 5

  return (
    <div
      style={{
        paddingLeft: "24px",
        paddingRight: "24px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 0,
        }}
      />

      <div
        style={{
          boxSizing: "border-box",
          paddingRight: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "7/5",
            overflow: "hidden",
          }}
        >
          {/* Overlay de cuadrícula */}
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
    </div>
  )
}
