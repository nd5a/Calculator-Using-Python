import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import './tour-card.css'
import calculateAvgRating from '../utils/avgRating'

const TourCard = ({ tour }) => {
   const { title, city, photo, price, featured, reviews } = tour
   const { totalRating, avgRating } = calculateAvgRating(reviews)
   const navigate = useNavigate()

   const handleBookNow = () => {
      navigate(`/tours/${encodeURIComponent(title)}`, { state: { tour } })
   }

   return (
      <div className='tour__card'>
         <Card>
            <div className="tour__img">
               <img src={photo} alt="tour-img" />
               {featured && <span>Featured</span>}
            </div>
 
            <CardBody>
               <div className="card__top d-flex align-items-center justify-content-between">
                  <span className="tour__location d-flex align-items-center gap-1">
                     <i className='ri-map-pin-line'></i> {city}
                  </span>
                  <span className="tour__rating d-flex align-items-center gap-1">
                     <i className='ri-star-fill'></i> {avgRating === 0 ? null : avgRating}
                     {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}
                  </span>
               </div>

               <h5 className='tour__title'>{title}</h5>

               <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                  <h5>${price} <span> /per person</span></h5>

                  <button className='booking__btn' onClick={handleBookNow}>Book Now</button>
               </div>
            </CardBody>
         </Card>
      </div>
   )
}

export default TourCard
