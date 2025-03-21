import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Travel Guide`,
      desc: ` A book, document, or online resource that provides information and advice about a particular destination or travel topic, including details about attractions, accommodations, dining, and culture.`,
   },
   {
      imgUrl: customizationImg,
      title: `Luxurious Hotel`,
      desc: `A Luxury Hotel is considered a hotel that provides a luxurious accommodation experience to the guest. There are no set standards (such as stars) for luxury hotels. Often 4 or 5-star hotels.`,
   },
   {
      imgUrl: guideImg,
      title: 'Suitable price',
      desc: `Competitive and affordable pricing that offers value for money, without compromising on quality. A price that is reasonable, transparent, and flexible, ensuring customer satisfaction and loyalty.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList