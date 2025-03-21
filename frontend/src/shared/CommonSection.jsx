
import React from "react";
import Slider from "react-slick";
import "./common-section.css";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom"; 
import SearchBar from "./SearchBar"; // Import SearchBar

// Import images for the slider
import slide1 from "../assets/images/tour.jpg";
import slide2 from "../assets/images/tour-img03.jpg";
import slide3 from "../assets/images/tour-img09.jpeg";

const CommonSection = ({ title }) => {
   const location = useLocation();
   const isToursPage = location.pathname === "/tours"; // Check if on Tours page

   // Slick slider settings
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
   };

   return (
      <section className="common__section">
         <Slider {...settings}>
            <div className="slide">
               <img src={slide1} alt="Banner 1" />
            </div>
            <div className="slide">
               <img src={slide2} alt="Banner 2" />
            </div>
            <div className="slide">
               <img src={slide3} alt="Banner 3" />
            </div>
         </Slider>
         
         <Container className="title-container">
            <Row>
               <Col lg="12">
                  <h1>{title}</h1>
               </Col>
            </Row>
            
            {/* Show Search Bar only on the Tours page */}
            {isToursPage && (
               <Row className="mt-4">
                  <Col lg="12">
                     <SearchBar />
                  </Col>
               </Row>
            )}
         </Container>
      </section>
   );
};

export default CommonSection;
