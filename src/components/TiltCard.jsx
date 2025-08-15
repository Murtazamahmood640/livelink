import { use3DTilt } from"../assets/Hooks/use3DTilt"

const TiltCard = ({ children, className = "", intensity = "medium", glare = true, shadow = true, ...props }) => {
  const { ref, tiltStyle, glareStyle } = use3DTilt({
    maxTilt: intensity === "subtle" ? 8 : intensity === "strong" ? 25 : 15,
    scale: intensity === "subtle" ? 1.02 : intensity === "strong" ? 1.08 : 1.05,
    speed: intensity === "subtle" ? 400 : intensity === "strong" ? 200 : 300,
    glare,
    maxGlare: intensity === "subtle" ? 0.1 : intensity === "strong" ? 0.3 : 0.2,
  })

  return (
    <div
      ref={ref}
      className={`tilt-card ${shadow ? "tilt-shadow" : ""} ${className}`}
      style={{
        ...tiltStyle,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      {...props}
    >
      <div className="tilt-card-content" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>

      {glare && (
        <div
          className="tilt-glare"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            pointerEvents: "none",
            ...glareStyle,
          }}
        />
      )}
    </div>
  )
}

export default TiltCard
