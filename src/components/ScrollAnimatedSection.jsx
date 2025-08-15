import { useScrollAnimation } from "../assets/Hooks/useIntersectionObserver"

const ScrollAnimatedSection = ({ children, animation = "fadeInUp", delay = 0, className = "", threshold = 0.1 }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  return (
    <div
      ref={ref}
      className={`scroll-animate ${animation} ${isVisible ? "animate-in" : ""} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        "--animation-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimatedSection
