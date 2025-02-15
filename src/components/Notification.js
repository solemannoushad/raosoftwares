"use client"

import { useState, useEffect } from "react"

const AnimatedNotification = ({ message = "", duration = 5000, isVisible, setIsVisible }) => {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress <= 0) {
          clearInterval(interval)
          return 0
        }
        return prevProgress - 100 / (duration / 100)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [duration, isVisible])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        maxWidth: "300px",
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        borderRadius: "4px",
        padding: "16px",
        transition: "opacity 0.5s, transform 0.5s",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(100%)",
      }}
      className="z-40"
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        <div style={{ flex: 1 }}>{message}</div>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "4px",
            marginLeft: "8px",
          }}
        >
          <i className="iconoir-xmark text-xl"></i>
        </button>
      </div>
      <div
        style={{
          height: "4px",
          background: `linear-gradient(to right, #aa1439 ${progress}%, #4a4a4a ${progress}%)`,
          transition: "background 0.1s linear",
        }}
      />
    </div>
  )
}

export default AnimatedNotification

