import { useMultiLayerParallax } from "../assets/Hooks/useParallax"

const MultiLayerParallax = ({ children, layers = [], className = "", height = "100vh" }) => {
  const [containerRef, transforms] = useMultiLayerParallax(layers)

  return (
    <div
      ref={containerRef}
      className={`multi-parallax-container ${className}`}
      style={{ height, position: "relative", overflow: "hidden" }}
    >
      {/* Render each parallax layer */}
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`parallax-layer parallax-layer-${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "120%",
            backgroundImage: layer.image ? `url(${layer.image})` : undefined,
            backgroundColor: layer.color || "transparent",
            backgroundSize: layer.backgroundSize || "cover",
            backgroundPosition: layer.backgroundPosition || "center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${transforms[index]}px)`,
            willChange: "transform",
            zIndex: layer.zIndex || -10 + index,
            opacity: layer.opacity || 1,
          }}
        >
          {layer.content}
        </div>
      ))}

      {/* Content Layer */}
      <div className="parallax-content" style={{ position: "relative", zIndex: 10, height: "100%" }}>
        {children}
      </div>
    </div>
  )
}

export default MultiLayerParallax
