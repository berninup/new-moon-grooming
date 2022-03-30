import ImageSlider from "react-image-comparison-slider";
import Aussiedoodle from '../images/Ozzydoodle.jpg'
import Doodle from '../images/Doodle.jpg'
import Sheepadoodle from '../images/Sheepadoodle.jpg'
import Shorkie from '../images/Shorkie.jpg'
import Westie from '../images/Westie.jpg'
import Doodle2 from '../images/Doodle2.jpg'
import { Carousel } from "react-bootstrap"
function DogCarousel() {
  return (
    <Carousel className="">
        <Carousel.Item> 
            <img  src={Aussiedoodle} alt="Aussiedoodle" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={Doodle} alt="Doodle" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={Sheepadoodle} alt="Sheepadoodle" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={Shorkie} alt="Shorkie" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={Westie} alt="Westie" />
        </Carousel.Item>
        <Carousel.Item>
            <img src={Doodle2} alt="Doodle" />
        </Carousel.Item>
       
        
    </Carousel>

    
  )
}

export default DogCarousel