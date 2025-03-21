import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/success.css";

const Success = () => {
   return (
      <section>
         <Container>
            <Row>
               <Col lg="12" className="text-center pt-5">
                  <div className="success__container">
                     <span><i className="ri-checkbox-circle-line"></i></span>
                     <h1 className="mb-3 fw-semibold">Payment Successful</h1>
                     <h3 className="mb-4">Thank you for your payment!</h3>
                     <Button className="btn primary__btn w-25"><Link to="/home">Back to Home</Link></Button>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Success;
