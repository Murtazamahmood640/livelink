"use client"

import { useEffect, useRef, useState } from "react"

export const useParallax = (speed = 0.5, offset = 0) => {
  const elementRef = useRef(null)
  const [transform, setTransform] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight
      const windowHeight = window.innerHeight

      // Check if element is in viewport
      const elementBottom = elementTop + elementHeight
      const isInViewport = scrolled + windowHeight > elementTop && scrolled < elementBottom

      if (isInViewport) {
        // Calculate parallax offset
        const yPos = -(scrolled - elementTop + offset) * speed
        setTransform(yPos)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [speed, offset])

  return [elementRef, transform]
}

export const useMultiLayerParallax = (layers = []) => {
  const containerRef = useRef(null)
  const [transforms, setTransforms] = useState(layers.map(() => 0))

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight

      // Check if container is in viewport
      const containerBottom = containerTop + containerHeight
      const isInViewport = scrolled + windowHeight > containerTop && scrolled < containerBottom

      if (isInViewport) {
        const newTransforms = layers.map((layer) => {
          const yPos = -(scrolled - containerTop + (layer.offset || 0)) * (layer.speed || 0.5)
          return yPos
        })
        setTransforms(newTransforms)
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [layers])

  return [containerRef, transforms]
}
