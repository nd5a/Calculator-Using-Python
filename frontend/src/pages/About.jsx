// import '../styles/about.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import tourist1Img from '../assets/images/about-img2.jpg';
import tourist2Img from '../assets/images/about-img.jpg';
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/subtitle'; // Adjust the import path as needed
import '../styles/about.css';
import CommonSection from '../shared/CommonSection'; 
import ServiceList from '../services/ServiceList'


const About = () => {
  return (
    <div>
      <CommonSection title={"About Us"} />
      <section>
         <Container>
         <div className="title-wrap text-center">
            <span className="sm-title">Things to Know About us</span>
          </div>
            <Row>
               <Col lg='3'>
                  <h5 className="services__subtitle">What we serve throughout</h5>
                  <h2 className="services__title">We offer our best services</h2>
               </Col>
               <ServiceList />
            </Row>
         </Container>
      </section>
      <section id="about" className="py-4">
        <Container>
        <h2 className="lg-title">Our story</h2>
          <Row className="about-row">
            <Col lg="6" className="about-left my-2">
              <img src={tourist1Img} alt="about img" className="img-fluid" />
            </Col>
            <Col lg="6" className="about-right">
              <h2>15 Years of Experience</h2>
              <p className="text">
                Trips to amusement parks with massive roller coasters or a deeply wooded forest could be exciting. It’s important to remember that Columbus discovered America due to his travels. The journey becomes much more memorable when things don’t go as planned. For example, if a car tyre blows out on the highway and it begins to rain heavily, the trip will turn into an adventure, even though it was not intended to be such.
              </p>
              <p className="text">
                We travel to get a break from the mundane and robust lifestyle. It is a welcome change from the monotonous routine existence.
              </p>
            </Col>
          </Row>
          <Row className="about-row">
            <Col lg="6" className="about-right">
              <p className="text">
                We travel to get away from the monotony of our daily lives. It’s a refreshing diversion from the monotony of everyday life. It allows our minds to relax and gives our inner child the opportunity to play. Some trip memories are nostalgic and melancholy, while others are daring and exhilarating. Travelling instils a sense of adventure and encourages us to make the most of every opportunity. Some people prefer to travel in groups, whereas others prefer to travel alone.
              </p>
              <p className="text">
                A trip to the graveyard, the poet’s corner in London, or one’s ancestral house, for example, is a voyage to nostalgia. These travels allow them to relive memories and treasure golden memories from a bygone era. People who go on these journeys are frequently depressed and artistically inclined.
              </p>
            </Col>
            <Col lg="6" className="about-left my-2">
              <img src={tourist2Img} alt="about img" className="img-fluid" />
            </Col>
          </Row>
          <Row className="about-row">
            <Col lg="6" className="about-left my-2">
              <img src={tourist1Img} alt="about img" className="img-fluid" />
            </Col>
            <Col lg="6" className="about-right">
              <p className="text">
                One must not forget that travelling led Columbus to discover America. When things don’t go as planned, the trip becomes more memorable. For instance, if the car tyre gets punctured on the highway and starts raining heavily, the trip, even if not intended to be adventurous, shall become one. A trip to a museum or gothic architecture shall be thrilling. It was paradisal and divine. The cuisine was exquisite. The Portuguese culture and the museums offer various historical insights. Although it was the peak season and most crowded places, people were civilised and cultured.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>With our all experience <br /> we will serve you</h2>
                <p>Plan your dream trip with our expert travel guides and booking tools.
                  <br /> Let's make your travel dreams a reality!</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Year experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}
    </div>
  );
};

export default About;
