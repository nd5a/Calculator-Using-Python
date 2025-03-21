import React from 'react'
import Header from './../Header/Header'
import Routers from '../../router/Routers'
import Footer from './../Footer/Footer'
// import about from '../pages/About'

const Layout = () => {
   return (
      <>
         <Header />
         <Routers />
         <Footer />      
      </>
   )
}

export default Layout