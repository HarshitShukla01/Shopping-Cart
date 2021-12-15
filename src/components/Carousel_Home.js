import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../images/r1.jpg'
import logo2 from '../images/r2.jpg'
import logo3 from '../images/img2.jpg'
import '../style/Carousel_Home.css'

const Carousel_Home = () => {

const IMG_HEIGHT = "650";

return (
	<div className="container-fluid main_div-Carousel_Home">
	 <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 img_item_carousel-Carousel_Home" src={logo1}  alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 img_item_carousel-Carousel_Home" src={logo2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 img_item_carousel-Carousel_Home" src={logo3}  alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
	)
}

export default Carousel_Home