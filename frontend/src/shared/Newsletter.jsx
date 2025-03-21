import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
   return (
      <section className='newsletter'>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="newsletter__content">
                     <h2>Subscribe now to get useful traveling information</h2>
                     <form action="https://api.web3forms.com/submit" method="POST">
                     <input type='hidden' name='access_key' value="11e837f4-cc9a-4ada-8fd1-0a8d1a62b8b9" />
                     <div className="newsletter__input">
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button type='submit' className="btn newsletter__btn">Subscribe</button>
                     </div>
                        </form>
                     <p>Connect with us and share your experience by signing up using email follow the steps for more.
                     </p>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="newsletter__img">
                     <img src={maleTourist} alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default NewsLetter