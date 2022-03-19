import ImageSlider from "react-image-comparison-slider";

import { Carousel } from "react-bootstrap"
function DogCarousel() {
  return (
    <Carousel className="">
        <Carousel.Item> 
            <img  src="https://i.imgur.com/jDimNTZ.jpeg" alt="dog" />
        </Carousel.Item>
        <Carousel.Item>
            <img src="https://i.imgur.com/MU2dD8E.jpeg" alt="dog" />
        </Carousel.Item>
       
        
    </Carousel>
  )
}

export default DogCarousel