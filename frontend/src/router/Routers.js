// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import ThankYou from '../pages/ThankYou'
// import Home from './../pages/Home'
// import Login from './../pages/Login'
// import Register from './../pages/Register'
// import SearchResultList from './../pages/SearchResultList'
// import TourDetails from './../pages/TourDetails'
// import Tours from './../pages/Tours'
// import About from '../pages/About'
// import Gallery from '../pages/Gallery'
// const Routers = () => {
//    return (
//       <Routes>
//          <Route path='/' element={<Navigate to='/home'/>} />
//          <Route path='/home' element={<Home/>} />
//          <Route path='/tours' element={<Tours/>} />
//          <Route path='/tours/:id' element={<TourDetails/>} />
//          <Route path='/login' element={<Login/>} />
//          <Route path='/register' element={<Register/>} />
//          <Route path='/thank-you' element={<ThankYou/>} />
//          <Route path='/tours/search' element={<SearchResultList/>} />
//          <Route path='/about' element={<About/>} />
//          <Route path='/gallery' element={<Gallery/>} />
//       </Routes>
//    )
// }

// export default Routers
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ThankYou from '../pages/ThankYou';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import TourDetails from './../pages/TourDetails';
import Tours from './../pages/Tours';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Payment from '../pages/Payment';
import Success from '../pages/Success';
import Profile from '../pages/Profile';
import Wishlist from '../pages/Wishlist';
import Support from '../pages/Support';
import Itinerary from '../pages/Itinerary';


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home' />} />
         <Route path='/home' element={<Home />} />
         <Route path='/tours' element={<Tours />} />
         <Route path='/tours/:id' element={<TourDetails />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/thank-you' element={<ThankYou />} />
         <Route path='/tours/search' element={<SearchResultList />} />
         <Route path='/about' element={<About />} />
         <Route path='/gallery' element={<Gallery />} />
         <Route path="/payment" element={<Payment />} />
         <Route path="/success" element={<Success />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/support" element={<Support />} />
         <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
   );
};

export default Routers;

