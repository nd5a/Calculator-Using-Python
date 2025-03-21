
import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection';
import tourData from '../assets/data/tours';
import '../styles/tour.css';
import TourCard from './../shared/TourCard';
import Newsletter from './../shared/Newsletter';
import { Col, Container, Row } from 'reactstrap';

// Example titles to separate rows
const rowTitles = ["Exciting Adventure Tours", "Cultural Exploration", "Relaxing Getaways"];

const Tours = () => {
   const [pageCount] = useState(0);
   const [page, setPage] = useState(0);

   return (
      <>
         {/* CommonSection now includes the Search Bar inside it */}
         <CommonSection title="Explore Our Tours" showSearchBar={true} />

         <section className='pt-0'>
            <Container>
               {rowTitles.map((title, index) => (
                  <div key={index}>
                     <h3 className='location-title'>{title}</h3>
                     <Row>
                        {tourData.slice(index * 4, (index + 1) * 4).map(tour => (
                           <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
                              <TourCard tour={tour} />
                           </Col>
                        ))}
                     </Row>
                  </div>
               ))}
               <Row>
                  <Col lg='12'>
                     <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                        {[...Array(pageCount).keys()].map(number => (
                           <span key={number} onClick={() => setPage(number)}
                              className={page === number ? 'active__page' : ''}>
                              {number + 1}
                           </span>
                        ))}
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default Tours;
