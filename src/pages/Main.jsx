import ComparisonSlider from "../components/ComparisonSlider"
import DogCarousel from "../components/DogCarousel"
import Header from "../components/Header"
import NavBar from "../components/Navbar"
import Home from "../pages/Home"
import About from "./About"
import Testimonials from "./Testimonials"

function Main() {
  return (
    <div>
      <div className="fixed-top">
        <Header />
        <NavBar />
      </div>
      <Home />
      <About />
      <Testimonials />
    </div>
  )
}

export default Main