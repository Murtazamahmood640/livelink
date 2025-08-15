import { useParallax } from "../assets/Hooks/useParallax"

const ParallaxBackground = ({
  children,
  backgroundImage,
  speed = 0.5,
  overlay = true,
  overlayOpacity = 0.6,
  className = "",
  height = "100vh",
}) => {
  const [parallaxRef, transform] = useParallax(speed)

  return (
    <div
      ref={parallaxRef}
      className={`parallax-container ${className}`}
      style={{ height, position: "relative", overflow: "hidden" }}
    >
      {/* Parallax Background Layer */}
      <div
        className="parallax-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%", // Extra height for parallax effect
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${transform}px)`,
          willChange: "transform",
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      {overlay && (
        <div
          className="parallax-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
            zIndex: -1,
          }}
        />
      )}

      {/* Content */}
      <div className="parallax-content" style={{ position: "relative", zIndex: 1, height: "100%" }}>
        {children}
      </div>
    </div>
  )
}

export default ParallaxBackground
