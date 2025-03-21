import React, { useState, useRef, useEffect, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useLocation } from 'react-router-dom'; // Removed useParams
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const TourDetails = () => {
   const location = useLocation();
   const { tour } = location.state || {};
   const reviewMsgRef = useRef('');
   const [tourRating, setTourRating] = useState(null);
   const { user } = useContext(AuthContext);
   const { photo, desc, price, reviews, city, address, distance, maxGroupSize, title } = tour || {};
   const { avgRating } = calculateAvgRating(reviews || []);
   const options = { day: 'numeric', month: 'long', year: 'numeric' };

   const submitHandler = async (e) => {
      e.preventDefault();
      const reviewText = reviewMsgRef.current.value.trim();

      // 🔹 Validate user authentication
      if (!user) {
         alert('Please sign in to submit a review');
         return;
      }

      // 🔹 Validate required fields
      if (!reviewText || !tourRating) {
         alert('Please enter a review and select a rating!');
         return;
      }

      const reviewObj = {
         username: user.username, // Pass username from AuthContext
         reviewText,
         rating: tourRating
      };

      try {
         console.log("Submitting review for tour:", title); // Debugging
         console.log("Review Data:", reviewObj);

         const res = await fetch(`${BASE_URL}/review/${encodeURIComponent(title)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(reviewObj)
         });

         const result = await res.json();
         if (!res.ok) {
            alert(result.message);
            return;
         }

         alert(result.message);
         window.location.reload(); // Refresh page to show new review
      } catch (error) {
         alert('Failed to submit review. Please try again.');
         console.error('Review submission error:', error);
      }
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [tour]);

   if (!tour) {
      return <p>No tour details available</p>;
   }

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8'>
                  <div className="tour__content">
                     <img src={photo} alt="" />
                     <div className="tour__info">
                        <h2>{title}</h2>
                        <div className="d-flex align-items-center gap-5">
                           <span className="tour__rating d-flex align-items-center gap-1">
                              <i className='ri-star-s-fill' style={{ 'color': 'var(--secondary-color)' }}></i> 
                              {avgRating === 0 ? null : avgRating}
                              {avgRating === 0 ? ('Not rated') : (<span>({reviews?.length})</span>)}
                           </span>
                           <span><i className='ri-map-pin-fill'></i> {address}</span>
                        </div>

                        <div className="tour__extra-details">
                           <span><i className='ri-map-pin-2-line'></i> {city}</span>
                           <span><i className='ri-money-dollar-circle-line'></i> {price}/ per person</span>
                           <span><i className='ri-map-pin-time-line'></i> {distance} k/m</span>
                           <span><i className='ri-group-line'></i> {maxGroupSize} people</span>
                        </div>
                        <h5>Description</h5>
                        <p>{desc}</p>
                     </div>

                     {/* ============ TOUR REVIEWS SECTION START ============ */}
                     <div className="tour__reviews mt-4">
                        <h4>Reviews ({reviews?.length} reviews)</h4>

                        <Form onSubmit={submitHandler}>
                           <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                              <h6>Rate:</h6>
                              {[1, 2, 3, 4, 5].map((star) => (
                                 <span key={star} onClick={() => setTourRating(star)} style={{ cursor: "pointer" }}>
                                    <i className={`ri-star-${tourRating >= star ? "fill" : "line"}`}></i>
                                 </span>
                              ))}
                           </div>
                           <div className="review__input">
                              <input type="text" ref={reviewMsgRef} placeholder="Write a review" />
                              <button type="submit">Submit</button>
                           </div>
                        </Form>
                     </div>
                     {/* ============ TOUR REVIEWS SECTION END ============ */}
                  </div>
               </Col>
               <Col lg='4'>
                  <Booking tour={tour} />
               </Col>
            </Row>
         </Container>
         <Newsletter />
      </section>
   );
};

export default TourDetails;

