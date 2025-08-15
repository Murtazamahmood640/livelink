import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Emergency from "./pages/Emergency"
import Feedback from "./pages/Feedback"
import Contact from "./pages/Contact"
import Types from "./pages/Type"
import Sitemap from "./pages/Sitemap"
import "./assets/Css/ScrollAnimations.css"
import "./assets/Css/ParallaxEffects.css"
import "./assets/Css/TiltEffects.css"
import "./assets/Css/VideoBackground.css"

const App = () => {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/Gallery" Component={Gallery} />
          <Route path="/Emergency" Component={Emergency} />
          <Route path="/feedback" Component={Feedback} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/Type" Component={Types} />
          <Route path="/sitemap" Component={Sitemap} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
