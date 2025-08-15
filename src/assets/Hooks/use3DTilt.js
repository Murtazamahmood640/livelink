"use client"

import { useRef, useEffect, useState } from "react"

export const use3DTilt = (options = {}) => {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 300,
    glare = true,
    maxGlare = 0.2,
    reset = true,
    easing = "cubic-bezier(.03,.98,.52,.99)",
  } = options

  const elementRef = useRef(null)
  const [tiltStyle, setTiltStyle] = useState({})
  const [glareStyle, setGlareStyle] = useState({})

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      // Calculate tilt angles
      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      // Calculate glare position and intensity
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      const glareIntensity = Math.min(
        maxGlare,
        (Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) /
          Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2))) *
          maxGlare,
      )

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed}ms ${easing}`,
      })

      if (glare) {
        setGlareStyle({
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareIntensity}) 0%, transparent 50%)`,
          opacity: 1,
        })
      }
    }

    const handleMouseLeave = () => {
      if (reset) {
        setTiltStyle({
          transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          transition: `transform ${speed}ms ${easing}`,
        })

        if (glare) {
          setGlareStyle({
            opacity: 0,
            transition: `opacity ${speed}ms ${easing}`,
          })
        }
      }
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [maxTilt, perspective, scale, speed, glare, maxGlare, reset, easing])

  return {
    ref: elementRef,
    tiltStyle,
    glareStyle,
  }
}

export const useCardTilt = (intensity = "medium") => {
  const intensitySettings = {
    subtle: {
      maxTilt: 8,
      scale: 1.02,
      speed: 400,
      maxGlare: 0.1,
    },
    medium: {
      maxTilt: 15,
      scale: 1.05,
      speed: 300,
      maxGlare: 0.2,
    },
    strong: {
      maxTilt: 25,
      scale: 1.08,
      speed: 200,
      maxGlare: 0.3,
    },
  }

  return use3DTilt(intensitySettings[intensity] || intensitySettings.medium)
}
