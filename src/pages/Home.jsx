import HERO from "../components/home/Hero"
import AMBULANCE from "../components/home/Ambulance"
import WHYCHOOSEUS from "../components/home/Why-choose-us"
import SitemapRedirect from "../components/home/SitemapRedirect"
import "../assets/Css/Home.css"
import "../assets/Css/SitemapRedirect.css"

const Home = () => {
  return (
    <>
      <HERO />
      <AMBULANCE />
      <WHYCHOOSEUS />
      <SitemapRedirect />
    </>
  )
}

export default Home
